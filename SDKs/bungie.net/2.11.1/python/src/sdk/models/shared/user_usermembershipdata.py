from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class UserUserMembershipData:
    bungie_net_user: Optional[UserGeneralUser] = field(default=None)
    destiny_memberships: Optional[List[GroupsV2GroupUserInfoCard]] = field(default=None)
    primary_membership_id: Optional[int] = field(default=None)
    
