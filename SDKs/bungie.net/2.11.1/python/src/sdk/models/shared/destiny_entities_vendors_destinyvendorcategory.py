from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyEntitiesVendorsDestinyVendorCategory:
    r"""DestinyEntitiesVendorsDestinyVendorCategory
    Information about the category and items currently sold in that category.
    """
    
    display_category_index: Optional[int] = field(default=None)
    item_indexes: Optional[List[int]] = field(default=None)
    
