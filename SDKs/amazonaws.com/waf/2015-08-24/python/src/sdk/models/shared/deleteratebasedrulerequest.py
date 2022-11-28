from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteRateBasedRuleRequest:
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    rule_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    
