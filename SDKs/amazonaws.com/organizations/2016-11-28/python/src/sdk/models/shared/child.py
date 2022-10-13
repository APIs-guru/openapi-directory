from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import childtype_enum


@dataclass_json
@dataclass
class Child:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    type: Optional[childtype_enum.ChildTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
