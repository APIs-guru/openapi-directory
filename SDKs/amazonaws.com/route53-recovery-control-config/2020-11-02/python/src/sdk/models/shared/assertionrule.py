from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import ruleconfig
from . import status_enum


@dataclass_json
@dataclass
class AssertionRule:
    asserted_controls: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssertedControls' }})
    control_panel_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlPanelArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rule_config: ruleconfig.RuleConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleConfig' }})
    safety_rule_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SafetyRuleArn' }})
    status: status_enum.StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    wait_period_ms: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitPeriodMs' }})
    
