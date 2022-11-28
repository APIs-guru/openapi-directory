from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TransactionData:
    r"""TransactionData
    Represents details collected when the visitor performs a transaction on the page.
    """
    
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    transaction_revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionRevenue') }})
    transaction_shipping: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionShipping') }})
    transaction_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionTax') }})
    
