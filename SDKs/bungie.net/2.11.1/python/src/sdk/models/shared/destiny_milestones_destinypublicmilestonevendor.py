from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyMilestonesDestinyPublicMilestoneVendor:
    preview_item_hash: Optional[int] = field(default=None)
    vendor_hash: Optional[int] = field(default=None)
    
