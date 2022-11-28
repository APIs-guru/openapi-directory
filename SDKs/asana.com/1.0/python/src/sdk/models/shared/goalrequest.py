from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoalRequestMetricUnitEnum(str, Enum):
    NONE = "none"
    CURRENCY = "currency"
    PERCENTAGE = "percentage"


@dataclass_json
@dataclass
class GoalRequestMetricInput:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    current_display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_display_value') }})
    current_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_number_value') }})
    initial_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_number_value') }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    target_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_number_value') }})
    unit: Optional[GoalRequestMetricUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class GoalRequestOwnerInput:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GoalRequestTeamInput:
    r"""GoalRequestTeamInput
    *Conditional*. This property is only present when the `workspace` provided is an organization.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GoalRequestTimePeriodPeriodEnum(str, Enum):
    FY = "FY"
    H1 = "H1"
    H2 = "H2"
    Q1 = "Q1"
    Q2 = "Q2"
    Q3 = "Q3"
    Q4 = "Q4"


@dataclass_json
@dataclass
class GoalRequestTimePeriodInput:
    end_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_on') }})
    period: Optional[GoalRequestTimePeriodPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    start_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on') }})
    

@dataclass_json
@dataclass
class GoalRequestWorkspaceInput:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GoalRequestInput:
    due_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on') }})
    followers: Optional[List[UserCompactInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    html_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_notes') }})
    is_workspace_level: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_workspace_level') }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    metric: Optional[GoalRequestMetricInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    owner: Optional[GoalRequestOwnerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    start_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    team: Optional[GoalRequestTeamInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    time_period: Optional[GoalRequestTimePeriodInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_period') }})
    workspace: Optional[GoalRequestWorkspaceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
