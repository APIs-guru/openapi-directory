from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StatelessRulesAndCustomActions:
    r"""StatelessRulesAndCustomActions
    Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules. 
    """
    
    stateless_rules: List[StatelessRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessRules') }})
    custom_actions: Optional[List[CustomAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomActions') }})
    
