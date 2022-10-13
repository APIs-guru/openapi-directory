from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destination


@dataclass_json
@dataclass
class PutDestinationResponse:
    destination: Optional[destination.Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    
