from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvSubscriptionFullPriceRenewal:
    full_price_renewal: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullPriceRenewal' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
