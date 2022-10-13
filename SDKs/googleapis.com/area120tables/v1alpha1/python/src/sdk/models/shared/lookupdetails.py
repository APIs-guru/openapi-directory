from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LookupDetails:
    relationship_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipColumn' }})
    relationship_column_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipColumnId' }})
    
