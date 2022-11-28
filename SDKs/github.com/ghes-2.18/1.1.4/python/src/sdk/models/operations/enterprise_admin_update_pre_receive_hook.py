from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdatePreReceiveHookPathParams:
    pre_receive_hook_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveHookRequestBody:
    allow_downstream_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_downstream_configuration') }})
    enforcement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement') }})
    environment: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    script_repository: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_repository') }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookRequest:
    path_params: EnterpriseAdminUpdatePreReceiveHookPathParams = field()
    request: Optional[EnterpriseAdminUpdatePreReceiveHookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookResponse:
    content_type: str = field()
    status_code: int = field()
    pre_receive_hook: Optional[shared.PreReceiveHook] = field(default=None)
    
