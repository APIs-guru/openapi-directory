from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTagKeysOutput:
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    tag_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKeys' }})
    
