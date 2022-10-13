from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import relationshiptype_enum


@dataclass_json
@dataclass
class Relationship:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ids' }})
    type: Optional[relationshiptype_enum.RelationshipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
