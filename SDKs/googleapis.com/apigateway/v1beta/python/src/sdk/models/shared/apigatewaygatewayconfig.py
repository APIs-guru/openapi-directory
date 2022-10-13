from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apigatewaybackendconfig


@dataclass_json
@dataclass
class ApigatewayGatewayConfig:
    backend_config: Optional[apigatewaybackendconfig.ApigatewayBackendConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendConfig' }})
    
