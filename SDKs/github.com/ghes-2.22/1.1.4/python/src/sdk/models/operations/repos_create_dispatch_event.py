from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateDispatchEventPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateDispatchEventRequestBody:
    client_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_payload' }})
    event_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type' }})
    

@dataclass
class ReposCreateDispatchEventRequest:
    path_params: ReposCreateDispatchEventPathParams = field(default=None)
    request: Optional[ReposCreateDispatchEventRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateDispatchEventResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
