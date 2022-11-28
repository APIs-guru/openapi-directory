from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssertionRule:
    r"""AssertionRule
    An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
    """
    
    asserted_controls: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssertedControls') }})
    control_panel_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanelArn') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rule_config: RuleConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleConfig') }})
    safety_rule_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SafetyRuleArn') }})
    status: StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    wait_period_ms: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitPeriodMs') }})
    
