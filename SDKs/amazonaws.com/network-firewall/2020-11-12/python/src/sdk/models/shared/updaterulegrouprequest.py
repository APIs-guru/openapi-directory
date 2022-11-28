from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateRuleGroupRequest:
    update_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    rule_group: Optional[RuleGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroup') }})
    rule_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupArn') }})
    rule_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupName') }})
    rules: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    type: Optional[RuleGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
