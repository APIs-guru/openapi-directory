from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyDestinyProgression:
    r"""DestinyDestinyProgression
    Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this \"live\" data with the related DestinyProgressionDefinition for a full picture of the Progression.
    """
    
    current_progress: Optional[int] = field(default=None)
    current_reset_count: Optional[int] = field(default=None)
    daily_limit: Optional[int] = field(default=None)
    daily_progress: Optional[int] = field(default=None)
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
    
