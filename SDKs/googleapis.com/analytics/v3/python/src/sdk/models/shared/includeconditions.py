from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IncludeConditions:
    r"""IncludeConditions
    JSON template for an Analytics Remarketing Include Conditions.
    """
    
    days_to_look_back: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysToLookBack') }})
    is_smart_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSmartList') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    membership_duration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipDurationDays') }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment') }})
    
