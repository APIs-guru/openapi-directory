from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OcrPhotoTextElement:
    r"""OcrPhotoTextElement
    A single text in an OCR document
    """
    
    bounding_points: Optional[List[Point]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingPoints') }})
    confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfidenceLevel') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Width') }})
    x_left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XLeft') }})
    y_top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YTop') }})
    
