from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostFloatingIPActionPathParams:
    floating_ip: str = field(default=None, metadata={'path_param': { 'field_name': 'floating_ip', 'style': 'simple', 'explode': False }})
    
class PostFloatingIPActionRequestBody1TypeEnum(str, Enum):
    ASSIGN = "assign"
    UNASSIGN = "unassign"


@dataclass_json
@dataclass
class PostFloatingIPActionRequestBody1:
    type: PostFloatingIPActionRequestBody1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostFloatingIPActionRequestBody2TypeEnum(str, Enum):
    ASSIGN = "assign"
    UNASSIGN = "unassign"


@dataclass_json
@dataclass
class PostFloatingIPActionRequestBody2:
    droplet_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_id' }})
    type: PostFloatingIPActionRequestBody2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostFloatingIPActionRequest:
    path_params: PostFloatingIPActionPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFloatingIPAction401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class PostFloatingIPActionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    post_floating_ip_action_201_application_json_any: Optional[Any] = field(default=None)
    post_floating_ip_action_401_application_json_object: Optional[PostFloatingIPAction401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
