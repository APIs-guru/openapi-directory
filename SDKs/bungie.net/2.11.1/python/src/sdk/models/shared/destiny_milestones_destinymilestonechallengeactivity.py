from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyMilestonesDestinyMilestoneChallengeActivity:
    activity_hash: Optional[int] = field(default=None)
    boolean_activity_options: Optional[dict[str, bool]] = field(default=None)
    challenges: Optional[List[DestinyChallengesDestinyChallengeStatus]] = field(default=None)
    loadout_requirement_index: Optional[int] = field(default=None)
    modifier_hashes: Optional[List[int]] = field(default=None)
    phases: Optional[List[DestinyMilestonesDestinyMilestoneActivityPhase]] = field(default=None)
    
