from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatefulRuleGroupReference:
    r"""StatefulRuleGroupReference
    Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group. 
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    
