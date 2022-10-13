from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GCP_REGIONAL_MIG = "GCP_REGIONAL_MIG"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway:
    app_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appGateway' }})
    ingress_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressPort' }})
    l7psc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l7psc' }})
    type: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
