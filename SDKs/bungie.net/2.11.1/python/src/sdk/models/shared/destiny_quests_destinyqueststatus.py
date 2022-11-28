from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyQuestsDestinyQuestStatus:
    r"""DestinyQuestsDestinyQuestStatus
    Data regarding the progress of a Quest for a specific character. Quests are composed of multiple steps, each with potentially multiple objectives: this QuestStatus will return Objective data for the *currently active* step in this quest.
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
    
