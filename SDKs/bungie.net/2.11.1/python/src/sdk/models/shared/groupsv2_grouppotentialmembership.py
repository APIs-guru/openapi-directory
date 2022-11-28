from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupPotentialMembership:
    group: Optional[GroupsV2GroupV2] = field(default=None)
    member: Optional[GroupsV2GroupPotentialMember] = field(default=None)
    
