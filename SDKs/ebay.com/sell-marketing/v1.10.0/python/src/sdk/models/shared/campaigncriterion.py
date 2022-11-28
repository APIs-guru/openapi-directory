from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignCriterion:
    r"""CampaignCriterion
    This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign.
    """
    
    auto_select_future_inventory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoSelectFutureInventory') }})
    criterion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criterionType') }})
    selection_rules: Optional[List[SelectionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionRules') }})
    
