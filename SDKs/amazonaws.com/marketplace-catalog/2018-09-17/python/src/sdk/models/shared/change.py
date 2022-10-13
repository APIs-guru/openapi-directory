from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import entity


@dataclass_json
@dataclass
class Change:
    change_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeName' }})
    change_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeType' }})
    details: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    entity: entity.Entity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entity' }})
    
