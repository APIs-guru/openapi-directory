from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TracksListResponse:
    kind: Optional[str] = field(default=None)
    tracks: Optional[List[Track]] = field(default=None)
    
