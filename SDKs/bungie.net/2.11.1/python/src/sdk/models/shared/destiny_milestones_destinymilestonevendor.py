from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyMilestonesDestinyMilestoneVendor:
    r"""DestinyMilestonesDestinyMilestoneVendor
    If a Milestone has one or more Vendors that are relevant to it, this will contain information about that vendor that you can choose to show.
    """
    
    preview_item_hash: Optional[int] = field(default=None)
    vendor_hash: Optional[int] = field(default=None)
    
