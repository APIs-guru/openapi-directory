from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Point:
    r"""Point
    Point location in 2D in an image, where 0, 0 represents the top/left corner of the image
    """
    
    x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('X') }})
    y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Y') }})
    
