from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatingRule:
    r"""GatingRule
    A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
    """
    
    control_panel_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanelArn') }})
    gating_controls: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatingControls') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rule_config: RuleConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleConfig') }})
    safety_rule_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SafetyRuleArn') }})
    status: StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    target_controls: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetControls') }})
    wait_period_ms: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitPeriodMs') }})
    
