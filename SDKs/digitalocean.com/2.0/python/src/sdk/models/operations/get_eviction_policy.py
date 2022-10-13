from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetEvictionPolicyPathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEvictionPolicyRequest:
    path_params: GetEvictionPolicyPathParams = field(default=None)
    
class GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum(str, Enum):
    NOEVICTION = "noeviction"
    ALLKEYS_LRU = "allkeys_lru"
    ALLKEYS_RANDOM = "allkeys_random"
    VOLATILE_LRU = "volatile_lru"
    VOLATILE_RANDOM = "volatile_random"
    VOLATILE_TTL = "volatile_ttl"


@dataclass_json
@dataclass
class GetEvictionPolicy200ApplicationJSON:
    eviction_policy: GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eviction_policy' }})
    

@dataclass_json
@dataclass
class GetEvictionPolicy401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetEvictionPolicyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_eviction_policy_200_application_json_object: Optional[GetEvictionPolicy200ApplicationJSON] = field(default=None)
    get_eviction_policy_401_application_json_object: Optional[GetEvictionPolicy401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
