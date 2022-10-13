from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import membership


@dataclass_json
@dataclass
class MembershipList:
    memberships: List[membership.Membership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
