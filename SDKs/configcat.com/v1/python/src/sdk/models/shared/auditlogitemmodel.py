from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuditLogItemModel:
    action_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionTarget' }})
    audit_log_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLogDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    audit_log_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLogId' }})
    audit_log_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLogType' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmail' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    where: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'where' }})
    why: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'why' }})
    
