from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class CreateRoomRequestNewGroupMemberAcceptanceEnum(str, Enum):
    AUTOALLOW = "autoallow"
    PENDING = "pending"


@dataclass_json
@dataclass
class CreateRoomRequest:
    admin_group_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminGroupIds' }})
    admin_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminIds' }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    has_activities_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasActivitiesLog' }})
    has_recycle_bin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasRecycleBin' }})
    inherit_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritPermissions' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    new_group_member_acceptance: Optional[CreateRoomRequestNewGroupMemberAcceptanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newGroupMemberAcceptance' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    recycle_bin_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recycleBinRetentionPeriod' }})
    timestamp_creation: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampCreation', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timestamp_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampModification', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
