from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SubscriptionPurchasesDeferResponse:
    new_expiry_time_millis: Optional[str] = field(default=None)
    
