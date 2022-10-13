from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autosnapshotdetails
from . import resourcetype_enum


@dataclass_json
@dataclass
class GetAutoSnapshotsResult:
    auto_snapshots: Optional[List[autosnapshotdetails.AutoSnapshotDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoSnapshots' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
