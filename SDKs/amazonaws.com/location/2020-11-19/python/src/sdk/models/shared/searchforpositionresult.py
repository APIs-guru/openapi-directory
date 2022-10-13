from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import place


@dataclass_json
@dataclass
class SearchForPositionResult:
    place: place.Place = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Place' }})
    
