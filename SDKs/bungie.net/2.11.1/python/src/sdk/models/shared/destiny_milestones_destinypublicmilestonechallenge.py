from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyMilestonesDestinyPublicMilestoneChallenge:
    r"""DestinyMilestonesDestinyPublicMilestoneChallenge
    A Milestone can have many Challenges. Challenges are just extra Objectives that provide a fun way to mix-up play and provide extra rewards.
    """
    
    activity_hash: Optional[int] = field(default=None)
    objective_hash: Optional[int] = field(default=None)
    
