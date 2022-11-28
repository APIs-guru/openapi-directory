from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SegmentReference:
    r"""SegmentReference
    Specifies the segment identifier and version of a segment.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
