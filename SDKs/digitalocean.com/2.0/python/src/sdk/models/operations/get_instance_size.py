from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetInstanceSizePathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstanceSizeRequest:
    path_params: GetInstanceSizePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetInstanceSize200ApplicationJSON:
    instance_size: Optional[shared.Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_size' }})
    

@dataclass_json
@dataclass
class GetInstanceSize401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetInstanceSizeResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_instance_size_200_application_json_object: Optional[GetInstanceSize200ApplicationJSON] = field(default=None)
    get_instance_size_401_application_json_object: Optional[GetInstanceSize401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
