from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import permissiontype_enum


@dataclass_json
@dataclass
class ShareInvitationSummary:
    permission_type: Optional[permissiontype_enum.PermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionType' }})
    share_invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareInvitationId' }})
    shared_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedBy' }})
    shared_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedWith' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadName' }})
    
