from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrgsCreateWebhookPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrgsCreateWebhookRequestBodyConfig:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    insecure_ssl: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecure_ssl' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class OrgsCreateWebhookRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    config: OrgsCreateWebhookRequestBodyConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class OrgsCreateWebhookRequest:
    path_params: OrgsCreateWebhookPathParams = field(default=None)
    request: Optional[OrgsCreateWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsCreateWebhookResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_hook: Optional[shared.OrgHook] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
