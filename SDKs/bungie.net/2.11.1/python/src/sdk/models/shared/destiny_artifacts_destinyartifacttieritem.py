from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyArtifactsDestinyArtifactTierItem:
    is_active: Optional[bool] = field(default=None)
    item_hash: Optional[int] = field(default=None)
    
