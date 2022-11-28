from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyDestinyItemQuantity:
    r"""DestinyDestinyItemQuantity
    Used in a number of Destiny contracts to return data about an item stack and its quantity. Can optionally return an itemInstanceId if the item is instanced - in which case, the quantity returned will be 1. If it's not... uh, let me know okay? Thanks.
    """
    
    has_conditional_visibility: Optional[bool] = field(default=None)
    item_hash: Optional[int] = field(default=None)
    item_instance_id: Optional[int] = field(default=None)
    quantity: Optional[int] = field(default=None)
    
