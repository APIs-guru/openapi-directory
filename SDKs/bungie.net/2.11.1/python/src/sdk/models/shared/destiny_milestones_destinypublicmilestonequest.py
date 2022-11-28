from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyMilestonesDestinyPublicMilestoneQuestActivity:
    r"""DestinyMilestonesDestinyPublicMilestoneQuestActivity
    A milestone need not have an active activity, but if there is one it will be returned here, along with any variant and additional information.
    """
    
    activity_hash: Optional[int] = field(default=None)
    activity_mode_hash: Optional[int] = field(default=None)
    activity_mode_type: Optional[int] = field(default=None)
    modifier_hashes: Optional[List[int]] = field(default=None)
    variants: Optional[List[DestinyMilestonesDestinyPublicMilestoneActivityVariant]] = field(default=None)
    

@dataclass
class DestinyMilestonesDestinyPublicMilestoneQuest:
    activity: Optional[DestinyMilestonesDestinyPublicMilestoneQuestActivity] = field(default=None)
    challenges: Optional[List[DestinyMilestonesDestinyPublicMilestoneChallenge]] = field(default=None)
    quest_item_hash: Optional[int] = field(default=None)
    
