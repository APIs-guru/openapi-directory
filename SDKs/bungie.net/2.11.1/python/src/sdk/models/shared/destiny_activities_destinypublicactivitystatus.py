from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyActivitiesDestinyPublicActivityStatus:
    r"""DestinyActivitiesDestinyPublicActivityStatus
    Represents the public-facing status of an activity: any data about what is currently active in the Activity, regardless of an individual character's progress in it.
    """
    
    challenge_objective_hashes: Optional[List[int]] = field(default=None)
    modifier_hashes: Optional[List[int]] = field(default=None)
    reward_tooltip_items: Optional[List[DestinyDestinyItemQuantity]] = field(default=None)
    
