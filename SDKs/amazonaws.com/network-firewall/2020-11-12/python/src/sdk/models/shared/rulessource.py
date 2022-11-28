from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RulesSource:
    r"""RulesSource
    The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules. 
    """
    
    rules_source_list: Optional[RulesSourceList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RulesSourceList') }})
    rules_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RulesString') }})
    stateful_rules: Optional[List[StatefulRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatefulRules') }})
    stateless_rules_and_custom_actions: Optional[StatelessRulesAndCustomActions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessRulesAndCustomActions') }})
    
