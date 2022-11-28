from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyDestinyActivity:
    r"""DestinyDestinyActivity
    Represents the \"Live\" data that we can obtain about a Character's status with a specific Activity. This will tell you whether the character can participate in the activity, as well as some other basic mutable information. 
    Meant to be combined with static DestinyActivityDefinition data for a full picture of the Activity.
    """
    
    activity_hash: Optional[int] = field(default=None)
    boolean_activity_options: Optional[dict[str, bool]] = field(default=None)
    can_join: Optional[bool] = field(default=None)
    can_lead: Optional[bool] = field(default=None)
    challenges: Optional[List[DestinyChallengesDestinyChallengeStatus]] = field(default=None)
    difficulty_tier: Optional[int] = field(default=None)
    display_level: Optional[int] = field(default=None)
    is_completed: Optional[bool] = field(default=None)
    is_new: Optional[bool] = field(default=None)
    is_visible: Optional[bool] = field(default=None)
    loadout_requirement_index: Optional[int] = field(default=None)
    modifier_hashes: Optional[List[int]] = field(default=None)
    recommended_light: Optional[int] = field(default=None)
    
