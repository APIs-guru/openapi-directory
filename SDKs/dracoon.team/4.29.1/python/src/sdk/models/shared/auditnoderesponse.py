from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audituserpermission
from . import userinfo
from . import userinfo


@dataclass_json
@dataclass
class AuditNodeResponse:
    audit_user_permission_list: List[audituserpermission.AuditUserPermission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditUserPermissionList' }})
    node_cnt_children: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCntChildren' }})
    node_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_created_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCreatedBy' }})
    node_has_activities_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeHasActivitiesLog' }})
    node_has_recycle_bin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeHasRecycleBin' }})
    node_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeId' }})
    node_is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeIsEncrypted' }})
    node_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeName' }})
    node_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeParentId' }})
    node_parent_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeParentPath' }})
    node_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeQuota' }})
    node_recycle_bin_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeRecycleBinRetentionPeriod' }})
    node_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeSize' }})
    node_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_updated_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeUpdatedBy' }})
    
