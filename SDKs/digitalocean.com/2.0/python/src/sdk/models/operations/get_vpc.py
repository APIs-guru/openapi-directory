from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetVpcPathParams:
    vpc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'vpc_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVpcRequest:
    path_params: GetVpcPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetVpc200ApplicationJSON:
    vpc: Optional[shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc' }})
    

@dataclass_json
@dataclass
class GetVpc401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetVpcResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_vpc_200_application_json_object: Optional[GetVpc200ApplicationJSON] = field(default=None)
    get_vpc_401_application_json_object: Optional[GetVpc401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
