from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ApigatewayAuditLogConfigLogTypeEnum(str, Enum):
    LOG_TYPE_UNSPECIFIED = "LOG_TYPE_UNSPECIFIED"
    ADMIN_READ = "ADMIN_READ"
    DATA_WRITE = "DATA_WRITE"
    DATA_READ = "DATA_READ"


@dataclass_json
@dataclass
class ApigatewayAuditLogConfig:
    r"""ApigatewayAuditLogConfig
    Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
    """
    
    exempted_members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptedMembers') }})
    log_type: Optional[ApigatewayAuditLogConfigLogTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logType') }})
    
