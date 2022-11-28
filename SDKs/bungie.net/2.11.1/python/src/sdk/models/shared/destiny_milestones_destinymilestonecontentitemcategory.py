from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyMilestonesDestinyMilestoneContentItemCategory:
    r"""DestinyMilestonesDestinyMilestoneContentItemCategory
    Part of our dynamic, localized Milestone content is arbitrary categories of items. These are built in our content management system, and thus aren't the same as programmatically generated rewards.
    """
    
    item_hashes: Optional[List[int]] = field(default=None)
    title: Optional[str] = field(default=None)
    
