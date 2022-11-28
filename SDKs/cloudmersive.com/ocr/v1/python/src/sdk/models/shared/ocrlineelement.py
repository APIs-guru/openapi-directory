from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OcrLineElement:
    r"""OcrLineElement
    A contiguous line of text in an OCR document
    """
    
    line_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineText') }})
    words: Optional[List[OcrWordElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Words') }})
    
