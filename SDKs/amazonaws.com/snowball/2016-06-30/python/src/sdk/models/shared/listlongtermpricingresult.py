from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import longtermpricinglistentry


@dataclass_json
@dataclass
class ListLongTermPricingResult:
    long_term_pricing_entries: Optional[List[longtermpricinglistentry.LongTermPricingListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingEntries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
