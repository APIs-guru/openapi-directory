from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyMilestonesDestinyPublicMilestone:
    r"""DestinyMilestonesDestinyPublicMilestone
    Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
    """
    
    activities: Optional[List[DestinyMilestonesDestinyPublicMilestoneChallengeActivity]] = field(default=None)
    available_quests: Optional[List[DestinyMilestonesDestinyPublicMilestoneQuest]] = field(default=None)
    end_date: Optional[datetime] = field(default=None)
    milestone_hash: Optional[int] = field(default=None)
    order: Optional[int] = field(default=None)
    start_date: Optional[datetime] = field(default=None)
    vendor_hashes: Optional[List[int]] = field(default=None)
    vendors: Optional[List[DestinyMilestonesDestinyPublicMilestoneVendor]] = field(default=None)
    
