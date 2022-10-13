from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTagValuesInput:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    
