from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListingStructurePolicy:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    category_tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTreeId' }})
    variations_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variationsSupported' }})
    
