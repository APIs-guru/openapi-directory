from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OwnerTypeDto:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    owner_type_group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerTypeGroupId' }})
    
