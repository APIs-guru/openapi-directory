from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBonusPaymentsResponse:
    bonus_payments: Optional[List[BonusPayment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BonusPayments') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumResults') }})
    
