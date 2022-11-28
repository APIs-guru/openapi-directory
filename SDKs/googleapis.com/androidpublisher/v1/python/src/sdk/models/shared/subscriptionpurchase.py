from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SubscriptionPurchase:
    r"""SubscriptionPurchase
    A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
    """
    
    auto_renewing: Optional[bool] = field(default=None)
    initiation_timestamp_msec: Optional[str] = field(default=None)
    kind: Optional[str] = field(default=None)
    valid_until_timestamp_msec: Optional[str] = field(default=None)
    
