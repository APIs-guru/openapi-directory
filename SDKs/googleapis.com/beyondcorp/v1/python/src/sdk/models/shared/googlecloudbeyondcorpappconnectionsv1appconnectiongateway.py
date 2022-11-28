from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GCP_REGIONAL_MIG = "GCP_REGIONAL_MIG"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway:
    r"""GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway
    Gateway represents a user facing component that serves as an entrance to enable connectivity.
    """
    
    app_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appGateway') }})
    ingress_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressPort') }})
    l7psc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l7psc') }})
    type: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput:
    r"""GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput
    Gateway represents a user facing component that serves as an entrance to enable connectivity.
    """
    
    app_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appGateway') }})
    type: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
