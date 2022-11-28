from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupV2ClanInfoAndInvestment:
    r"""GroupsV2GroupV2ClanInfoAndInvestment
    The same as GroupV2ClanInfo, but includes any investment data.
    """
    
    clan_banner_data: Optional[GroupsV2ClanBanner] = field(default=None)
    clan_callsign: Optional[str] = field(default=None)
    d2_clan_progressions: Optional[dict[str, DestinyDestinyProgression]] = field(default=None)
    
