from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageToLinesWithLocationResult:
    r"""ImageToLinesWithLocationResult
    Result of an image to lines-with-location OCR operation
    """
    
    lines: Optional[List[OcrLineElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lines') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
