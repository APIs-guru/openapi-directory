from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyMilestonesDestinyPublicMilestoneChallengeActivity:
    activity_hash: Optional[int] = field(default=None)
    boolean_activity_options: Optional[dict[str, bool]] = field(default=None)
    challenge_objective_hashes: Optional[List[int]] = field(default=None)
    loadout_requirement_index: Optional[int] = field(default=None)
    modifier_hashes: Optional[List[int]] = field(default=None)
    phase_hashes: Optional[List[int]] = field(default=None)
    
