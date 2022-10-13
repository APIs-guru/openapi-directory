from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteCallAnalyticsCategoryRequest:
    category_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CategoryName' }})
    
