from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDomainPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domain_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainRequest:
    path_params: GetDomainPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDomain401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetDomainResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_domain_200_application_json_any: Optional[Any] = field(default=None)
    get_domain_401_application_json_object: Optional[GetDomain401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
