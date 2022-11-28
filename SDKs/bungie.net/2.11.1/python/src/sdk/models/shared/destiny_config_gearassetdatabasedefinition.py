from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyConfigGearAssetDataBaseDefinition:
    path: Optional[str] = field(default=None)
    version: Optional[int] = field(default=None)
    
