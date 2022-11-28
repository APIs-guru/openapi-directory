from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BillingInfo:
    r"""BillingInfo
    The configuration data for an Ad Exchange billing info.
    """
    
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    billing_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
