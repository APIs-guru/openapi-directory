from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListLongTermPricingResult:
    long_term_pricing_entries: Optional[List[LongTermPricingListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingEntries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
