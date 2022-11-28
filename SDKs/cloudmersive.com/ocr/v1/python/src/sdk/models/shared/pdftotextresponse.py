from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PdfToTextResponse:
    r"""PdfToTextResponse
    Response from an OCR to text operation.  Includes the confidence rating and converted text result.
    """
    
    ocr_pages: Optional[List[OcrPageResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OcrPages') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
