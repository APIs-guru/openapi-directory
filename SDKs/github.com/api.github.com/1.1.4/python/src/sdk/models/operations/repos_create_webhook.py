from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateWebhookPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateWebhookRequestBodyConfig:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecure_ssl' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ReposCreateWebhookRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    config: ReposCreateWebhookRequestBodyConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class ReposCreateWebhookRequest:
    path_params: ReposCreateWebhookPathParams = field(default=None)
    request: Optional[ReposCreateWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateWebhookResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    hook: Optional[shared.Hook] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
