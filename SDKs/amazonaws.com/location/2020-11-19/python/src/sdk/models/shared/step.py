from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Step:
    r"""Step
     Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg. 
    """
    
    distance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distance') }})
    duration_seconds: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationSeconds') }})
    end_position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndPosition') }})
    start_position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPosition') }})
    geometry_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeometryOffset') }})
    
