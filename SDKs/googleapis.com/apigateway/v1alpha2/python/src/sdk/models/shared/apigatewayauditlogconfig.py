from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ApigatewayAuditLogConfigLogTypeEnum(str, Enum):
    LOG_TYPE_UNSPECIFIED = "LOG_TYPE_UNSPECIFIED"
    ADMIN_READ = "ADMIN_READ"
    DATA_WRITE = "DATA_WRITE"
    DATA_READ = "DATA_READ"


@dataclass_json
@dataclass
class ApigatewayAuditLogConfig:
    exempted_members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptedMembers' }})
    log_type: Optional[ApigatewayAuditLogConfigLogTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logType' }})
    
