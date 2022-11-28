from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuleConfig:
    r"""RuleConfig
    The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.
    """
    
    inverted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inverted') }})
    threshold: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    type: RuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
