from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import permissiontype_enum
from . import sharestatus_enum


@dataclass_json
@dataclass
class WorkloadShare:
    permission_type: Optional[permissiontype_enum.PermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionType' }})
    share_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareId' }})
    shared_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedBy' }})
    shared_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedWith' }})
    status: Optional[sharestatus_enum.ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadName' }})
    
