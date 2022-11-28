from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupsV2ClanBanner:
    decal_background_color_id: Optional[int] = field(default=None)
    decal_color_id: Optional[int] = field(default=None)
    decal_id: Optional[int] = field(default=None)
    gonfalon_color_id: Optional[int] = field(default=None)
    gonfalon_detail_color_id: Optional[int] = field(default=None)
    gonfalon_detail_id: Optional[int] = field(default=None)
    gonfalon_id: Optional[int] = field(default=None)
    
