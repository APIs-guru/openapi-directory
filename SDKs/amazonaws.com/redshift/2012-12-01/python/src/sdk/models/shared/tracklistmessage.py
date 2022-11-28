from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TrackListMessage:
    maintenance_tracks: Optional[List[MaintenanceTrack]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
