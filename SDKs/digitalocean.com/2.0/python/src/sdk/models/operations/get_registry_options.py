from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum(str, Enum):
    OVER_REPOSITORY_LIMIT = "OverRepositoryLimit"
    OVER_STORAGE_LIMIT = "OverStorageLimit"


@dataclass_json
@dataclass
class GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiers:
    allow_storage_overage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_storage_overage' }})
    eligibility_reasons: Optional[List[GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligibility_reasons' }})
    eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligible' }})
    included_bandwidth_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_bandwidth_bytes' }})
    included_repositories: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_repositories' }})
    included_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_storage_bytes' }})
    monthly_price_in_cents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly_price_in_cents' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    

@dataclass_json
@dataclass
class GetRegistryOptions200ApplicationJSONOptions:
    subscription_tiers: Optional[List[GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_tiers' }})
    

@dataclass_json
@dataclass
class GetRegistryOptions200ApplicationJSON:
    options: Optional[GetRegistryOptions200ApplicationJSONOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class GetRegistryOptions401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetRegistryOptionsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_registry_options_200_application_json_object: Optional[GetRegistryOptions200ApplicationJSON] = field(default=None)
    get_registry_options_401_application_json_object: Optional[GetRegistryOptions401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
