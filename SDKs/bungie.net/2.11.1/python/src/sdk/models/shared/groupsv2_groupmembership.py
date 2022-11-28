from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupMembership:
    group: Optional[GroupsV2GroupV2] = field(default=None)
    member: Optional[GroupsV2GroupMember] = field(default=None)
    
