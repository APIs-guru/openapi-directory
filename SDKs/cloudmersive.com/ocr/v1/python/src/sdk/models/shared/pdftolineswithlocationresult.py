from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PdfToLinesWithLocationResult:
    r"""PdfToLinesWithLocationResult
    Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
    """
    
    ocr_pages: Optional[List[OcrPageResultWithLinesWithLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OcrPages') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
