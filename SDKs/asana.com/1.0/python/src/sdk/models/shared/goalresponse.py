from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoalResponseMetricResourceSubtypeEnum(str, Enum):
    NUMBER = "number"

class GoalResponseMetricUnitEnum(str, Enum):
    NONE = "none"
    CURRENCY = "currency"
    PERCENTAGE = "percentage"


@dataclass_json
@dataclass
class GoalResponseMetric:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    current_display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_display_value') }})
    current_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_number_value') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    initial_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_number_value') }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    resource_subtype: Optional[GoalResponseMetricResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    target_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_number_value') }})
    unit: Optional[GoalResponseMetricUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class GoalResponseOwner:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclass
class GoalResponseTeam:
    r"""GoalResponseTeam
    *Conditional*. This property is only present when the `workspace` provided is an organization.
    """
    
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class GoalResponseTimePeriodPeriodEnum(str, Enum):
    FY = "FY"
    H1 = "H1"
    H2 = "H2"
    Q1 = "Q1"
    Q2 = "Q2"
    Q3 = "Q3"
    Q4 = "Q4"


@dataclass_json
@dataclass
class GoalResponseTimePeriod:
    end_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_on') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    period: Optional[GoalResponseTimePeriodPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    start_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on') }})
    

@dataclass_json
@dataclass
class GoalResponseWorkspace:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclass
class GoalResponse:
    due_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on') }})
    followers: Optional[List[UserCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    html_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_notes') }})
    is_workspace_level: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_workspace_level') }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    likes: Optional[List[Like]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    metric: Optional[GoalResponseMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    num_likes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_likes') }})
    owner: Optional[GoalResponseOwner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    start_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    team: Optional[GoalResponseTeam] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    time_period: Optional[GoalResponseTimePeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_period') }})
    workspace: Optional[GoalResponseWorkspace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
