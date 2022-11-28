from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuditNodeResponse:
    r"""AuditNodeResponse
    Audit node report
    """
    
    audit_user_permission_list: List[AuditUserPermission] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditUserPermissionList') }})
    node_cnt_children: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCntChildren') }})
    node_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeId') }})
    node_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeName') }})
    node_parent_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeParentPath') }})
    node_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_created_by: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCreatedBy') }})
    node_has_activities_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeHasActivitiesLog') }})
    node_has_recycle_bin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeHasRecycleBin') }})
    node_is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeIsEncrypted') }})
    node_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeParentId') }})
    node_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeQuota') }})
    node_recycle_bin_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeRecycleBinRetentionPeriod') }})
    node_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeSize') }})
    node_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_updated_by: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeUpdatedBy') }})
    
