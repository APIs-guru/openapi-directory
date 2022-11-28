from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SegmentCondition:
    r"""SegmentCondition
    Specifies a segment to associate with an activity in a journey.
    """
    
    segment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    
