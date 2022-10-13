from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposUpdateWebhookPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateWebhookRequestBodyConfig:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecure_ssl' }})
    room: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ReposUpdateWebhookRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    add_events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_events' }})
    config: Optional[ReposUpdateWebhookRequestBodyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    remove_events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remove_events' }})
    

@dataclass
class ReposUpdateWebhookRequest:
    path_params: ReposUpdateWebhookPathParams = field(default=None)
    request: Optional[ReposUpdateWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    hook: Optional[shared.Hook] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
