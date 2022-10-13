from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import suppresseddestination


@dataclass_json
@dataclass
class GetSuppressedDestinationResponse:
    suppressed_destination: suppresseddestination.SuppressedDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressedDestination' }})
    
