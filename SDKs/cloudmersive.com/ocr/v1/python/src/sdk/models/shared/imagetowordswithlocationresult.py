from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageToWordsWithLocationResult:
    r"""ImageToWordsWithLocationResult
    Result of an image to words-with-location OCR operation
    """
    
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    words: Optional[List[OcrWordElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Words') }})
    
