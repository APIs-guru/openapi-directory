from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categoryproperties


@dataclass_json
@dataclass
class ListCallAnalyticsCategoriesResponse:
    categories: Optional[List[categoryproperties.CategoryProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Categories' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
