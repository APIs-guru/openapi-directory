from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus:
    r"""DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus
    An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
    """
    
    completed: Optional[bool] = field(default=None)
    phases: Optional[List[DestinyMilestonesDestinyMilestoneActivityPhase]] = field(default=None)
    

@dataclass
class DestinyMilestonesDestinyMilestoneActivityVariant:
    r"""DestinyMilestonesDestinyMilestoneActivityVariant
    Represents custom data that we know about an individual variant of an activity.
    """
    
    activity_hash: Optional[int] = field(default=None)
    activity_mode_hash: Optional[int] = field(default=None)
    activity_mode_type: Optional[int] = field(default=None)
    completion_status: Optional[DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus] = field(default=None)
    
