from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutDestinationRequest:
    destination_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    target_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    
