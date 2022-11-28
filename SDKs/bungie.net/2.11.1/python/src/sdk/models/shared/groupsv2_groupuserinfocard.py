from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GroupsV2GroupUserInfoCard:
    last_seen_display_name: Optional[str] = field(default=None)
    last_seen_display_name_type: Optional[int] = field(default=None)
    applicable_membership_types: Optional[List[int]] = field(default=None)
    cross_save_override: Optional[int] = field(default=None)
    display_name: Optional[str] = field(default=None)
    icon_path: Optional[str] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    supplemental_display_name: Optional[str] = field(default=None)
    
