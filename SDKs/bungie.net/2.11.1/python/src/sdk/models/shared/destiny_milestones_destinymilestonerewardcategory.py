from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyMilestonesDestinyMilestoneRewardCategory:
    r"""DestinyMilestonesDestinyMilestoneRewardCategory
    Represents a category of \"summary\" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
    """
    
    entries: Optional[List[DestinyMilestonesDestinyMilestoneRewardEntry]] = field(default=None)
    reward_category_hash: Optional[int] = field(default=None)
    
