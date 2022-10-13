from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateCdnEndpointPathParams:
    cdn_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cdn_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateCdnEndpointRequestBody:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_id' }})
    custom_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_domain' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    

@dataclass
class UpdateCdnEndpointRequest:
    path_params: UpdateCdnEndpointPathParams = field(default=None)
    request: UpdateCdnEndpointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateCdnEndpoint401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateCdnEndpointResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_cdn_endpoint_202_application_json_any: Optional[Any] = field(default=None)
    update_cdn_endpoint_401_application_json_object: Optional[UpdateCdnEndpoint401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
