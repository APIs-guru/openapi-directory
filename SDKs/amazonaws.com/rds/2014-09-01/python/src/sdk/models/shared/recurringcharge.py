from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RecurringCharge:
    recurring_charge_amount: Optional[float] = field(default=None)
    recurring_charge_frequency: Optional[str] = field(default=None)
    
