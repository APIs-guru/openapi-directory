from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import selectionrule


@dataclass_json
@dataclass
class CampaignCriterion:
    auto_select_future_inventory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoSelectFutureInventory' }})
    criterion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criterionType' }})
    selection_rules: Optional[List[selectionrule.SelectionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionRules' }})
    
