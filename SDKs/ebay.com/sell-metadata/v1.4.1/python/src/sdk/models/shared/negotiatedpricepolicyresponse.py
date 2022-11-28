from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NegotiatedPricePolicyResponse:
    negotiated_price_policies: Optional[List[NegotiatedPricePolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negotiatedPricePolicies') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
