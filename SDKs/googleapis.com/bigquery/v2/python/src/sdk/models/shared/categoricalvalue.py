from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categorycount


@dataclass_json
@dataclass
class CategoricalValue:
    category_counts: Optional[List[categorycount.CategoryCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryCounts' }})
    
