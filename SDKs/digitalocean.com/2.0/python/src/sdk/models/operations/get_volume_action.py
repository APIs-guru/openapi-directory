from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetVolumeActionPathParams:
    action_id: int = field(default=None, metadata={'path_param': { 'field_name': 'action_id', 'style': 'simple', 'explode': False }})
    volume_id: str = field(default=None, metadata={'path_param': { 'field_name': 'volume_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumeActionQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVolumeActionRequest:
    path_params: GetVolumeActionPathParams = field(default=None)
    query_params: GetVolumeActionQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetVolumeAction401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetVolumeActionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_volume_action_200_application_json_any: Optional[Any] = field(default=None)
    get_volume_action_401_application_json_object: Optional[GetVolumeAction401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
