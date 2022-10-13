from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdatePreReceiveHookPathParams:
    pre_receive_hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveHookRequestBody:
    allow_downstream_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_downstream_configuration' }})
    enforcement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcement' }})
    environment: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    script_repository: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_repository' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookRequest:
    path_params: EnterpriseAdminUpdatePreReceiveHookPathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdatePreReceiveHookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pre_receive_hook: Optional[shared.PreReceiveHook] = field(default=None)
    
