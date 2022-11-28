from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RokuPlans:
    plans: List[RokuPlanListItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plans') }})
    terms_and_conditions: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    
