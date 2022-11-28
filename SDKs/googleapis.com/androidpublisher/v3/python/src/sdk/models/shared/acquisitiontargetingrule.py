from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AcquisitionTargetingRule:
    r"""AcquisitionTargetingRule
    Represents a targeting rule of the form: User never had {scope} before.
    """
    
    scope: Optional[TargetingRuleScope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
