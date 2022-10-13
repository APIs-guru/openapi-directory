from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutDestinationPolicyRequest:
    access_policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicy' }})
    destination_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    
