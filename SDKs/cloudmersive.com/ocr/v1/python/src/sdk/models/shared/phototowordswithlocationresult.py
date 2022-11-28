from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PhotoToWordsWithLocationResult:
    r"""PhotoToWordsWithLocationResult
    Result of an photo to words-with-location OCR operation
    """
    
    diagnostic_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiagnosticImage') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    text_elements: Optional[List[OcrPhotoTextElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextElements') }})
    
