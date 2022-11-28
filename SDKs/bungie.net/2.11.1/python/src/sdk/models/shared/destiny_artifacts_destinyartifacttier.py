from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyArtifactsDestinyArtifactTier:
    is_unlocked: Optional[bool] = field(default=None)
    items: Optional[List[DestinyArtifactsDestinyArtifactTierItem]] = field(default=None)
    points_to_unlock: Optional[int] = field(default=None)
    tier_hash: Optional[int] = field(default=None)
    
