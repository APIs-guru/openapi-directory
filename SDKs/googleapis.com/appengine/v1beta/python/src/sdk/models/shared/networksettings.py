from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NetworkSettingsIngressTrafficAllowedEnum(str, Enum):
    INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED = "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
    INGRESS_TRAFFIC_ALLOWED_ALL = "INGRESS_TRAFFIC_ALLOWED_ALL"
    INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY = "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY"
    INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB = "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"


@dataclass_json
@dataclass
class NetworkSettings:
    r"""NetworkSettings
    A NetworkSettings resource is a container for ingress settings for a version or service.
    """
    
    ingress_traffic_allowed: Optional[NetworkSettingsIngressTrafficAllowedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressTrafficAllowed') }})
    
