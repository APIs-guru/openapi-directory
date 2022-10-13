from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateHitTypeOfHitRequest:
    hit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    hit_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITTypeId' }})
    
