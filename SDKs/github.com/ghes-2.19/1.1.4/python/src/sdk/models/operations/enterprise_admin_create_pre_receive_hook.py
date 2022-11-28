from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminCreatePreReceiveHookRequestBody:
    environment: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    script_repository: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_repository') }})
    allow_downstream_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_downstream_configuration') }})
    enforcement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement') }})
    

@dataclass
class EnterpriseAdminCreatePreReceiveHookRequest:
    request: Optional[EnterpriseAdminCreatePreReceiveHookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreatePreReceiveHookResponse:
    content_type: str = field()
    status_code: int = field()
    pre_receive_hook: Optional[shared.PreReceiveHook] = field(default=None)
    
