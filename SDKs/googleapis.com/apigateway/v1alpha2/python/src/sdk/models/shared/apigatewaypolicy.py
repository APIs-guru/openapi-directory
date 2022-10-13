from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apigatewayauditconfig
from . import apigatewaybinding


@dataclass_json
@dataclass
class ApigatewayPolicy:
    audit_configs: Optional[List[apigatewayauditconfig.ApigatewayAuditConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditConfigs' }})
    bindings: Optional[List[apigatewaybinding.ApigatewayBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
