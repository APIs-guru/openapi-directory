from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateSettingValueModel:
    rollout_percentage_items: Optional[List[RolloutPercentageItemModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutPercentageItems') }})
    rollout_rules: Optional[List[RolloutRuleModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolloutRules') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
