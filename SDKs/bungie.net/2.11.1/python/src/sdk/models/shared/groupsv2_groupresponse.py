from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GroupsV2GroupResponse:
    alliance_status: Optional[int] = field(default=None)
    allied_ids: Optional[List[int]] = field(default=None)
    current_user_member_map: Optional[dict[str, GroupsV2GroupMember]] = field(default=None)
    current_user_memberships_inactive_for_destiny: Optional[bool] = field(default=None)
    current_user_potential_member_map: Optional[dict[str, GroupsV2GroupPotentialMember]] = field(default=None)
    detail: Optional[GroupsV2GroupV2] = field(default=None)
    founder: Optional[GroupsV2GroupMember] = field(default=None)
    group_join_invite_count: Optional[int] = field(default=None)
    parent_group: Optional[GroupsV2GroupV2] = field(default=None)
    
