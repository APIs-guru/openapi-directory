from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperBalanceWallet:
    r"""GoogleCloudApigeeV1DeveloperBalanceWallet
    Wallet used to manage an account balance for a particular currency.
    """
    
    balance: Optional[GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    last_credit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCreditTime') }})
    
