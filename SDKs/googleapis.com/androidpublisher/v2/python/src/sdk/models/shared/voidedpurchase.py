from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VoidedPurchase:
    r"""VoidedPurchase
    A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
    """
    
    kind: Optional[str] = field(default=None)
    purchase_time_millis: Optional[str] = field(default=None)
    purchase_token: Optional[str] = field(default=None)
    voided_time_millis: Optional[str] = field(default=None)
    
