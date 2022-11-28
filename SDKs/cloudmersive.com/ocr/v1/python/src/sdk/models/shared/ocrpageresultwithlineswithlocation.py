from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OcrPageResultWithLinesWithLocation:
    r"""OcrPageResultWithLinesWithLocation
    OCR results of a page, including lines of text and their location
    """
    
    lines: Optional[List[OcrLineElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lines') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageNumber') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
