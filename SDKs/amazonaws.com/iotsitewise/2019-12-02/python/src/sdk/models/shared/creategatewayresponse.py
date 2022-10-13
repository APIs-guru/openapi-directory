from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateGatewayResponse:
    gateway_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayArn' }})
    gateway_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayId' }})
    
