from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyMilestonesDestinyMilestoneQuestActivity:
    r"""DestinyMilestonesDestinyMilestoneQuestActivity
    *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
    """
    
    activity_hash: Optional[int] = field(default=None)
    activity_mode_hash: Optional[int] = field(default=None)
    activity_mode_type: Optional[int] = field(default=None)
    modifier_hashes: Optional[List[int]] = field(default=None)
    variants: Optional[List[DestinyMilestonesDestinyMilestoneActivityVariant]] = field(default=None)
    

@dataclass
class DestinyMilestonesDestinyMilestoneQuestStatus:
    r"""DestinyMilestonesDestinyMilestoneQuestStatus
    The current status of the quest for the character making the request.
    """
    
    completed: Optional[bool] = field(default=None)
    item_instance_id: Optional[int] = field(default=None)
    quest_hash: Optional[int] = field(default=None)
    redeemed: Optional[bool] = field(default=None)
    started: Optional[bool] = field(default=None)
    step_hash: Optional[int] = field(default=None)
    step_objectives: Optional[List[DestinyQuestsDestinyObjectiveProgress]] = field(default=None)
    tracked: Optional[bool] = field(default=None)
    vendor_hash: Optional[int] = field(default=None)
    

@dataclass
class DestinyMilestonesDestinyMilestoneQuest:
    r"""DestinyMilestonesDestinyMilestoneQuest
    If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
    """
    
    activity: Optional[DestinyMilestonesDestinyMilestoneQuestActivity] = field(default=None)
    challenges: Optional[List[DestinyChallengesDestinyChallengeStatus]] = field(default=None)
    quest_item_hash: Optional[int] = field(default=None)
    status: Optional[DestinyMilestonesDestinyMilestoneQuestStatus] = field(default=None)
    
