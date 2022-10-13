from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PropertyNameQuery:
    property_name_hint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyNameHint' }})
    
