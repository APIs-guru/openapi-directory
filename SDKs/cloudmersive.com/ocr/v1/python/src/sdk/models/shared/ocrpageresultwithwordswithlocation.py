from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OcrPageResultWithWordsWithLocation:
    r"""OcrPageResultWithWordsWithLocation
    OCR results of a page, including words of text and their location
    """
    
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageNumber') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    words: Optional[List[OcrWordElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Words') }})
    
