from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Policy:
    r"""Policy
    Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    policy_summary: Optional[PolicySummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicySummary') }})
    
