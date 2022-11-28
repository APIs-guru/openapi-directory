from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserHardLinkedUserMembership:
    cross_save_overridden_membership_id: Optional[int] = field(default=None)
    cross_save_overridden_type: Optional[int] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    
