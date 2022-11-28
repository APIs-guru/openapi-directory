from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonDetail:
    r"""PersonDetail
    Details about a person detected in a video analysis request.
    """
    
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    face: Optional[FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    
