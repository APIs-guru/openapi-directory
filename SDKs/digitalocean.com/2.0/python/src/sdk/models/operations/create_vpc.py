from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateVpcRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    

@dataclass
class CreateVpcRequest:
    request: CreateVpcRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateVpc201ApplicationJSON:
    vpc: Optional[shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc' }})
    

@dataclass_json
@dataclass
class CreateVpc401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateVpcResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_vpc_201_application_json_object: Optional[CreateVpc201ApplicationJSON] = field(default=None)
    create_vpc_401_application_json_object: Optional[CreateVpc401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
