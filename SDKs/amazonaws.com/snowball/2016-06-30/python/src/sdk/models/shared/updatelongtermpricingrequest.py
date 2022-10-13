from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateLongTermPricingRequest:
    is_long_term_pricing_auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsLongTermPricingAutoRenew' }})
    long_term_pricing_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingId' }})
    replacement_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplacementJob' }})
    
