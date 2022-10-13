from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class PostRegistrySubscriptionRequestBodyTierSlugEnum(str, Enum):
    STARTER = "starter"
    BASIC = "basic"
    PROFESSIONAL = "professional"


@dataclass_json
@dataclass
class PostRegistrySubscriptionRequestBody:
    tier_slug: Optional[PostRegistrySubscriptionRequestBodyTierSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_slug' }})
    

@dataclass
class PostRegistrySubscriptionRequest:
    request: Optional[PostRegistrySubscriptionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostRegistrySubscription401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class PostRegistrySubscriptionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    post_registry_subscription_401_application_json_object: Optional[PostRegistrySubscription401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    onev2_1registry_get_responses_200_content_application_1json_schema_properties_registry_properties_subscription_all_of_1: Optional[shared.Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1] = field(default=None)
    
