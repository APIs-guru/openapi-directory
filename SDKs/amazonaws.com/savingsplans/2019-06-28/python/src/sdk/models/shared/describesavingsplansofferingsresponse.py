from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import savingsplanoffering


@dataclass_json
@dataclass
class DescribeSavingsPlansOfferingsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    search_results: Optional[List[savingsplanoffering.SavingsPlanOffering]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchResults' }})
    
