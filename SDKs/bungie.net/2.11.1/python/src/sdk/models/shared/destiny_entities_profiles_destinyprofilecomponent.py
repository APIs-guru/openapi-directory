from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class DestinyEntitiesProfilesDestinyProfileComponentUserInfo:
    r"""DestinyEntitiesProfilesDestinyProfileComponentUserInfo
    If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains that information.
    """
    
    applicable_membership_types: Optional[List[int]] = field(default=None)
    cross_save_override: Optional[int] = field(default=None)
    display_name: Optional[str] = field(default=None)
    icon_path: Optional[str] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    supplemental_display_name: Optional[str] = field(default=None)
    

@dataclass
class DestinyEntitiesProfilesDestinyProfileComponent:
    r"""DestinyEntitiesProfilesDestinyProfileComponent
    The most essential summary information about a Profile (in Destiny 1, we called these \"Accounts\").
    """
    
    character_ids: Optional[List[int]] = field(default=None)
    current_season_hash: Optional[int] = field(default=None)
    current_season_reward_power_cap: Optional[int] = field(default=None)
    date_last_played: Optional[datetime] = field(default=None)
    season_hashes: Optional[List[int]] = field(default=None)
    user_info: Optional[DestinyEntitiesProfilesDestinyProfileComponentUserInfo] = field(default=None)
    versions_owned: Optional[int] = field(default=None)
    
