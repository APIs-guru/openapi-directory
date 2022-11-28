from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class MrssPeerLinkTypeEnum(str, Enum):
    APPLICATION_X_BITTORRENT = "application/x-bittorrent"


@dataclass
class MrssPeerLink:
    href: Optional[str] = field(default=None)
    type: Optional[MrssPeerLinkTypeEnum] = field(default=None)
    
