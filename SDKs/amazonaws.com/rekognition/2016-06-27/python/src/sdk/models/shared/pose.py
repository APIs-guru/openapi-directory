from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Pose:
    r"""Pose
    Indicates the pose of the face as determined by its pitch, roll, and yaw.
    """
    
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pitch') }})
    roll: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roll') }})
    yaw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Yaw') }})
    
