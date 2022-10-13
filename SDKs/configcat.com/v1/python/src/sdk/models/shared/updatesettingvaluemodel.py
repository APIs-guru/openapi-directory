from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import rolloutpercentageitemmodel
from . import rolloutrulemodel


@dataclass_json
@dataclass
class UpdateSettingValueModel:
    rollout_percentage_items: Optional[List[rolloutpercentageitemmodel.RolloutPercentageItemModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutPercentageItems' }})
    rollout_rules: Optional[List[rolloutrulemodel.RolloutRuleModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolloutRules' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
