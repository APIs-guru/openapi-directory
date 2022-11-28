from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyComponentsVendorsDestinyVendorGroup:
    r"""DestinyComponentsVendorsDestinyVendorGroup
    Represents a specific group of vendors that can be rendered in the recommended order.
    How do we figure out this order? It's a long story, and will likely get more complicated over time.
    """
    
    vendor_group_hash: Optional[int] = field(default=None)
    vendor_hashes: Optional[List[int]] = field(default=None)
    
