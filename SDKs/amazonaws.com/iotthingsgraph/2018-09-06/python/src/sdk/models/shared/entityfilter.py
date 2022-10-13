from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entityfiltername_enum


@dataclass_json
@dataclass
class EntityFilter:
    name: Optional[entityfiltername_enum.EntityFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
