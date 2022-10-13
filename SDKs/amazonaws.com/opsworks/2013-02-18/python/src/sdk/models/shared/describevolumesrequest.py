from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeVolumesRequest:
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    raid_array_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RaidArrayId' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    volume_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeIds' }})
    
