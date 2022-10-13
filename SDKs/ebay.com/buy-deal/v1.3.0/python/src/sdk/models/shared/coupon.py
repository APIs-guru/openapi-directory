from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import terms


@dataclass_json
@dataclass
class Coupon:
    redemption_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redemptionCode' }})
    terms: Optional[terms.Terms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    
