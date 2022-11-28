from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatelessRuleGroupReference:
    r"""StatelessRuleGroupReference
    Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group. 
    """
    
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    
