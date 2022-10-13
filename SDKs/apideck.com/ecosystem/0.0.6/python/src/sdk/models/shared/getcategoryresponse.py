from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class GetCategoryResponse:
    data: category.Category = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
