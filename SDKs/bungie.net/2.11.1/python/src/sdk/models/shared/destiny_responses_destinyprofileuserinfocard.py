from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyResponsesDestinyProfileUserInfoCardPlatformSilver:
    r"""DestinyResponsesDestinyProfileUserInfoCardPlatformSilver
    This is the silver available on this Profile across any platforms on which they have purchased silver.
     This is only available if you are requesting yourself.
    """
    
    platform_silver: Optional[dict[str, DestinyEntitiesItemsDestinyItemComponent]] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileUserInfoCard:
    applicable_membership_types: Optional[List[int]] = field(default=None)
    cross_save_override: Optional[int] = field(default=None)
    date_last_played: Optional[datetime] = field(default=None)
    display_name: Optional[str] = field(default=None)
    icon_path: Optional[str] = field(default=None)
    is_cross_save_primary: Optional[bool] = field(default=None)
    is_overridden: Optional[bool] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    platform_silver: Optional[DestinyResponsesDestinyProfileUserInfoCardPlatformSilver] = field(default=None)
    supplemental_display_name: Optional[str] = field(default=None)
    unpaired_game_versions: Optional[int] = field(default=None)
    
