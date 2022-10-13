from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateRegistryRequestBodySubscriptionTierSlugEnum(str, Enum):
    STARTER = "starter"
    BASIC = "basic"
    PROFESSIONAL = "professional"


@dataclass_json
@dataclass
class CreateRegistryRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    subscription_tier_slug: CreateRegistryRequestBodySubscriptionTierSlugEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_tier_slug' }})
    

@dataclass
class CreateRegistryRequest:
    request: CreateRegistryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateRegistry401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateRegistryResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_registry_201_application_json_any: Optional[Any] = field(default=None)
    create_registry_401_application_json_object: Optional[CreateRegistry401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
