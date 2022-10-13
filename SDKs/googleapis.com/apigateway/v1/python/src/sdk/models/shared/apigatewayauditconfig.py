from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apigatewayauditlogconfig


@dataclass_json
@dataclass
class ApigatewayAuditConfig:
    audit_log_configs: Optional[List[apigatewayauditlogconfig.ApigatewayAuditLogConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLogConfigs' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
