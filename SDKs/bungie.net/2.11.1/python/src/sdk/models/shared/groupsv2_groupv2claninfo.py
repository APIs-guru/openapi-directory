from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GroupsV2GroupV2ClanInfo:
    r"""GroupsV2GroupV2ClanInfo
    This contract contains clan-specific group information. It does not include any investment data.
    """
    
    clan_banner_data: Optional[GroupsV2ClanBanner] = field(default=None)
    clan_callsign: Optional[str] = field(default=None)
    
