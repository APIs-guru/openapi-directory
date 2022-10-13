from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import negotiatedpricepolicy
from . import error


@dataclass_json
@dataclass
class NegotiatedPricePolicyResponse:
    negotiated_price_policies: Optional[List[negotiatedpricepolicy.NegotiatedPricePolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negotiatedPricePolicies' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
