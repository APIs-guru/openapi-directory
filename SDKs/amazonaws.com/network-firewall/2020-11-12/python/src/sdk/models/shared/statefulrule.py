from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StatefulRule:
    r"""StatefulRule
    A single 5-tuple stateful rule, for use in a stateful rule group.
    """
    
    action: StatefulActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    header: Header = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Header') }})
    rule_options: List[RuleOption] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleOptions') }})
    
