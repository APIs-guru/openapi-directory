from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvSubscriptionFullPriceRenewal:
    full_price_renewal: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullPriceRenewal') }})
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
