from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyMilestonesDestinyMilestone:
    r"""DestinyMilestonesDestinyMilestone
    Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said \"things to do.\" Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.
    """
    
    activities: Optional[List[DestinyMilestonesDestinyMilestoneChallengeActivity]] = field(default=None)
    available_quests: Optional[List[DestinyMilestonesDestinyMilestoneQuest]] = field(default=None)
    end_date: Optional[datetime] = field(default=None)
    milestone_hash: Optional[int] = field(default=None)
    order: Optional[int] = field(default=None)
    rewards: Optional[List[DestinyMilestonesDestinyMilestoneRewardCategory]] = field(default=None)
    start_date: Optional[datetime] = field(default=None)
    values: Optional[dict[str, float]] = field(default=None)
    vendor_hashes: Optional[List[int]] = field(default=None)
    vendors: Optional[List[DestinyMilestonesDestinyMilestoneVendor]] = field(default=None)
    
