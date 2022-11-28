from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyMilestonesDestinyMilestoneContent:
    r"""DestinyMilestonesDestinyMilestoneContent
    Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
    """
    
    about: Optional[str] = field(default=None)
    item_categories: Optional[List[DestinyMilestonesDestinyMilestoneContentItemCategory]] = field(default=None)
    status: Optional[str] = field(default=None)
    tips: Optional[List[str]] = field(default=None)
    
