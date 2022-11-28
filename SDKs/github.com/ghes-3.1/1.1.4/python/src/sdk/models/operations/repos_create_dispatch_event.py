from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateDispatchEventPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateDispatchEventRequestBody:
    event_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    client_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_payload') }})
    

@dataclass
class ReposCreateDispatchEventRequest:
    path_params: ReposCreateDispatchEventPathParams = field()
    request: Optional[ReposCreateDispatchEventRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateDispatchEventResponse:
    content_type: str = field()
    status_code: int = field()
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
