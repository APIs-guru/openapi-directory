from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeSavingsPlanRatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    savings_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanId') }})
    search_results: Optional[List[SavingsPlanRate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchResults') }})
    
