from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import categoryproperties


@dataclass_json
@dataclass
class CreateCallAnalyticsCategoryResponse:
    category_properties: Optional[categoryproperties.CategoryProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CategoryProperties' }})
    
