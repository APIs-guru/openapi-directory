from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyMilestonesDestinyMilestoneRewardEntry:
    r"""DestinyMilestonesDestinyMilestoneRewardEntry
    The character-specific data for a milestone's reward entry. See DestinyMilestoneDefinition for more information about Reward Entries.
    """
    
    earned: Optional[bool] = field(default=None)
    redeemed: Optional[bool] = field(default=None)
    reward_entry_hash: Optional[int] = field(default=None)
    
