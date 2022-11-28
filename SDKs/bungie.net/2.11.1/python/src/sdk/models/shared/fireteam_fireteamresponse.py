from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FireteamFireteamResponse:
    alternates: Optional[List[FireteamFireteamMember]] = field(default=None)
    members: Optional[List[FireteamFireteamMember]] = field(default=None)
    summary: Optional[FireteamFireteamSummary] = field(default=None)
    
