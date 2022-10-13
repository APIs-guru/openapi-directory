from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCdnEndpointPathParams:
    cdn_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cdn_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCdnEndpointRequest:
    path_params: GetCdnEndpointPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCdnEndpoint401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetCdnEndpointResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_cdn_endpoint_200_application_json_any: Optional[Any] = field(default=None)
    get_cdn_endpoint_401_application_json_object: Optional[GetCdnEndpoint401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
