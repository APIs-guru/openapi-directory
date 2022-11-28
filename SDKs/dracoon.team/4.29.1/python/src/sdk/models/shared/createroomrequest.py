from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateRoomRequestNewGroupMemberAcceptanceEnum(str, Enum):
    AUTOALLOW = "autoallow"
    PENDING = "pending"


@dataclass_json
@dataclass
class CreateRoomRequest:
    r"""CreateRoomRequest
    Request model for creating a room
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    admin_group_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminGroupIds') }})
    admin_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminIds') }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    has_activities_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasActivitiesLog') }})
    has_recycle_bin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasRecycleBin') }})
    inherit_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritPermissions') }})
    new_group_member_acceptance: Optional[CreateRoomRequestNewGroupMemberAcceptanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newGroupMemberAcceptance') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    recycle_bin_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recycleBinRetentionPeriod') }})
    timestamp_creation: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampCreation'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timestamp_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampModification'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
