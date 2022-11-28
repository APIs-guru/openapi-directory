from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StatelessRule:
    r"""StatelessRule
    A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.
    """
    
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    rule_definition: RuleDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleDefinition') }})
    
