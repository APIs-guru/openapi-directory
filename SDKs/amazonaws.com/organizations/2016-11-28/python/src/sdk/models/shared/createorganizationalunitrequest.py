from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateOrganizationalUnitRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
