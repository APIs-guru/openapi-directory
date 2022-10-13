from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import parenttype_enum


@dataclass_json
@dataclass
class Parent:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    type: Optional[parenttype_enum.ParentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
