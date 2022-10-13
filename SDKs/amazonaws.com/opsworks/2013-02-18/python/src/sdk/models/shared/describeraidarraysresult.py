from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import raidarray


@dataclass_json
@dataclass
class DescribeRaidArraysResult:
    raid_arrays: Optional[List[raidarray.RaidArray]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RaidArrays' }})
    
