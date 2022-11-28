from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Budget:
    r"""Budget
    The configuration data for Ad Exchange RTB - Budget API.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    billing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingId') }})
    budget_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgetAmount') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
