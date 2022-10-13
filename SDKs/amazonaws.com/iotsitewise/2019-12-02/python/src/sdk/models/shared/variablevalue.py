from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VariableValue:
    hierarchy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hierarchyId' }})
    property_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyId' }})
    
