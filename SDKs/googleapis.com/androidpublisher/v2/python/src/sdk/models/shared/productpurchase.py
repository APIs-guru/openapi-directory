from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProductPurchase:
    r"""ProductPurchase
    A ProductPurchase resource indicates the status of a user's inapp product purchase.
    """
    
    consumption_state: Optional[int] = field(default=None)
    developer_payload: Optional[str] = field(default=None)
    kind: Optional[str] = field(default=None)
    order_id: Optional[str] = field(default=None)
    purchase_state: Optional[int] = field(default=None)
    purchase_time_millis: Optional[str] = field(default=None)
    purchase_type: Optional[int] = field(default=None)
    
