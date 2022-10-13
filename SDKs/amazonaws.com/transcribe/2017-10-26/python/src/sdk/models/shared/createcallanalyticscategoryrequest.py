from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import rule


@dataclass_json
@dataclass
class CreateCallAnalyticsCategoryRequest:
    category_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CategoryName' }})
    rules: List[rule.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
