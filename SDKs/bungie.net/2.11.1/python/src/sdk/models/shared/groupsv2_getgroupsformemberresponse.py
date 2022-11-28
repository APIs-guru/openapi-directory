from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GroupsV2GetGroupsForMemberResponse:
    are_all_memberships_inactive: Optional[dict[str, bool]] = field(default=None)
    has_more: Optional[bool] = field(default=None)
    query: Optional[QueriesPagedQuery] = field(default=None)
    replacement_continuation_token: Optional[str] = field(default=None)
    results: Optional[List[GroupsV2GroupMembership]] = field(default=None)
    total_results: Optional[int] = field(default=None)
    use_total_results: Optional[bool] = field(default=None)
    
