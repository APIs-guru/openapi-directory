from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTierPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTierRequest:
    path_params: GetTierPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetTier200ApplicationJSON:
    tier: Optional[shared.Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    

@dataclass_json
@dataclass
class GetTier401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetTierResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_tier_200_application_json_object: Optional[GetTier200ApplicationJSON] = field(default=None)
    get_tier_401_application_json_object: Optional[GetTier401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
