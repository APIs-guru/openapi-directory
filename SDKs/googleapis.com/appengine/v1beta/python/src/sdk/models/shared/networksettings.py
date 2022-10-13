from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NetworkSettingsIngressTrafficAllowedEnum(str, Enum):
    INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED = "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
    INGRESS_TRAFFIC_ALLOWED_ALL = "INGRESS_TRAFFIC_ALLOWED_ALL"
    INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY = "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY"
    INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB = "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"


@dataclass_json
@dataclass
class NetworkSettings:
    ingress_traffic_allowed: Optional[NetworkSettingsIngressTrafficAllowedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressTrafficAllowed' }})
    
