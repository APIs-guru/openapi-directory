from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RangePartitioningRange:
    r"""RangePartitioningRange
    [TrustedTester] [Required] Defines the ranges for range partitioning.
    """
    
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclass
class RangePartitioning:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    range: Optional[RangePartitioningRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
