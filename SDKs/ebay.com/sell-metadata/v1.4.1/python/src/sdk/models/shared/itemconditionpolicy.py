from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import itemcondition


@dataclass_json
@dataclass
class ItemConditionPolicy:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    category_tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTreeId' }})
    item_condition_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemConditionRequired' }})
    item_conditions: Optional[List[itemcondition.ItemCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemConditions' }})
    
