from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisassociateResolverRuleRequest:
    resolver_rule_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverRuleId') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VPCId') }})
    
