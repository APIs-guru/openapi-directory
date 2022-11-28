from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupMemberLeaveResult:
    group: Optional[GroupsV2GroupV2] = field(default=None)
    group_deleted: Optional[bool] = field(default=None)
    
