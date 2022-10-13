from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminCreatePreReceiveHookRequestBody:
    allow_downstream_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_downstream_configuration' }})
    enforcement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcement' }})
    environment: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    script_repository: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_repository' }})
    

@dataclass
class EnterpriseAdminCreatePreReceiveHookRequest:
    request: Optional[EnterpriseAdminCreatePreReceiveHookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreatePreReceiveHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pre_receive_hook: Optional[shared.PreReceiveHook] = field(default=None)
    
