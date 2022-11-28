from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GroupsV2GroupPotentialMembershipSearchResponse:
    has_more: Optional[bool] = field(default=None)
    query: Optional[QueriesPagedQuery] = field(default=None)
    replacement_continuation_token: Optional[str] = field(default=None)
    results: Optional[List[GroupsV2GroupPotentialMembership]] = field(default=None)
    total_results: Optional[int] = field(default=None)
    use_total_results: Optional[bool] = field(default=None)
    
