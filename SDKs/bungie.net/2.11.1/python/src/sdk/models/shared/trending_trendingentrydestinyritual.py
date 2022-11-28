from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class TrendingTrendingEntryDestinyRitualEventContent:
    r"""TrendingTrendingEntryDestinyRitualEventContent
    A destiny event will not necessarily have milestone \"custom content\", but if it does the details will be here.
    """
    
    about: Optional[str] = field(default=None)
    item_categories: Optional[List[DestinyMilestonesDestinyMilestoneContentItemCategory]] = field(default=None)
    status: Optional[str] = field(default=None)
    tips: Optional[List[str]] = field(default=None)
    

@dataclass
class TrendingTrendingEntryDestinyRitualMilestoneDetails:
    r"""TrendingTrendingEntryDestinyRitualMilestoneDetails
    A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
    """
    
    activities: Optional[List[DestinyMilestonesDestinyPublicMilestoneChallengeActivity]] = field(default=None)
    available_quests: Optional[List[DestinyMilestonesDestinyPublicMilestoneQuest]] = field(default=None)
    end_date: Optional[datetime] = field(default=None)
    milestone_hash: Optional[int] = field(default=None)
    order: Optional[int] = field(default=None)
    start_date: Optional[datetime] = field(default=None)
    vendor_hashes: Optional[List[int]] = field(default=None)
    vendors: Optional[List[DestinyMilestonesDestinyPublicMilestoneVendor]] = field(default=None)
    

@dataclass
class TrendingTrendingEntryDestinyRitual:
    date_end: Optional[datetime] = field(default=None)
    date_start: Optional[datetime] = field(default=None)
    event_content: Optional[TrendingTrendingEntryDestinyRitualEventContent] = field(default=None)
    icon: Optional[str] = field(default=None)
    image: Optional[str] = field(default=None)
    milestone_details: Optional[TrendingTrendingEntryDestinyRitualMilestoneDetails] = field(default=None)
    subtitle: Optional[str] = field(default=None)
    title: Optional[str] = field(default=None)
    
