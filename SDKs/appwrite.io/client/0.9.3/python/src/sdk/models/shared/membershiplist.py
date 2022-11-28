from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MembershipList:
    r"""MembershipList
    Memberships List
    """
    
    memberships: List[Membership] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    sum: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
