from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyDestinyStat:
    r"""DestinyDestinyStat
    Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
    """
    
    stat_hash: Optional[int] = field(default=None)
    value: Optional[int] = field(default=None)
    
