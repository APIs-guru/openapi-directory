from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyProgressionDestinyFactionProgression:
    r"""DestinyProgressionDestinyFactionProgression
    Mostly for historical purposes, we segregate Faction progressions from other progressions. This is just a DestinyProgression with a shortcut for finding the DestinyFactionDefinition of the faction related to the progression.
    """
    
    current_progress: Optional[int] = field(default=None)
    current_reset_count: Optional[int] = field(default=None)
    daily_limit: Optional[int] = field(default=None)
    daily_progress: Optional[int] = field(default=None)
    faction_hash: Optional[int] = field(default=None)
    faction_vendor_index: Optional[int] = field(default=None)
    level: Optional[int] = field(default=None)
    level_cap: Optional[int] = field(default=None)
    next_level_at: Optional[int] = field(default=None)
    progress_to_next_level: Optional[int] = field(default=None)
    progression_hash: Optional[int] = field(default=None)
    reward_item_states: Optional[List[int]] = field(default=None)
    season_resets: Optional[List[DestinyDestinyProgressionResetEntry]] = field(default=None)
    step_index: Optional[int] = field(default=None)
    weekly_limit: Optional[int] = field(default=None)
    weekly_progress: Optional[int] = field(default=None)
    
