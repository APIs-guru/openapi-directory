from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyDestinyProgressionResetEntry:
    r"""DestinyDestinyProgressionResetEntry
    Represents a season and the number of resets you had in that season.
     We do not necessarily - even for progressions with resets - track it over all seasons. So be careful and check the season numbers being returned.
    """
    
    resets: Optional[int] = field(default=None)
    season: Optional[int] = field(default=None)
    
