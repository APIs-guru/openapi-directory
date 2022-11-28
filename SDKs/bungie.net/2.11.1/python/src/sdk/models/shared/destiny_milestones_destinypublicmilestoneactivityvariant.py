from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyMilestonesDestinyPublicMilestoneActivityVariant:
    r"""DestinyMilestonesDestinyPublicMilestoneActivityVariant
    Represents a variant of an activity that's relevant to a milestone.
    """
    
    activity_hash: Optional[int] = field(default=None)
    activity_mode_hash: Optional[int] = field(default=None)
    activity_mode_type: Optional[int] = field(default=None)
    
