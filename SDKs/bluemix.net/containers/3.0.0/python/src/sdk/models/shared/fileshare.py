from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Fileshare:
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_date' }})
    fs_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fsName' }})
    host_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostPath' }})
    iops: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iops' }})
    iops_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iopsTotal' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    space_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceGuid' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_date' }})
    
