from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum(str, Enum):
    NOEVICTION = "noeviction"
    ALLKEYS_LRU = "allkeys_lru"
    ALLKEYS_RANDOM = "allkeys_random"
    VOLATILE_LRU = "volatile_lru"
    VOLATILE_RANDOM = "volatile_random"
    VOLATILE_TTL = "volatile_ttl"


@dataclass_json
@dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema:
    eviction_policy: Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eviction_policy' }})
    
