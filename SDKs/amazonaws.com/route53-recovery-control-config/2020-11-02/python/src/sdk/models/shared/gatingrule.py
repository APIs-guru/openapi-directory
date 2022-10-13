from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import ruleconfig
from . import status_enum


@dataclass_json
@dataclass
class GatingRule:
    control_panel_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlPanelArn' }})
    gating_controls: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GatingControls' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rule_config: ruleconfig.RuleConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleConfig' }})
    safety_rule_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SafetyRuleArn' }})
    status: status_enum.StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target_controls: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetControls' }})
    wait_period_ms: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitPeriodMs' }})
    
