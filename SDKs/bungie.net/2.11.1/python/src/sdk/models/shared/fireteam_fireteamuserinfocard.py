from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class FireteamFireteamUserInfoCard:
    fireteam_display_name: Optional[str] = field(default=None)
    fireteam_membership_type: Optional[int] = field(default=None)
    fireteam_platform_profile_url: Optional[str] = field(default=None)
    fireteam_platform_unique_identifier: Optional[str] = field(default=None)
    applicable_membership_types: Optional[List[int]] = field(default=None)
    cross_save_override: Optional[int] = field(default=None)
    display_name: Optional[str] = field(default=None)
    icon_path: Optional[str] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    supplemental_display_name: Optional[str] = field(default=None)
    
