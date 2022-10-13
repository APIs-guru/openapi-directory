from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import scim_user


@dataclass_json
@dataclass
class ScimUserList:
    resources: List[scim_user.ScimUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    items_per_page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsPerPage' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    start_index: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    total_results: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
