from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperBalance:
    r"""GoogleCloudApigeeV1DeveloperBalance
    Account balance for the developer.
    """
    
    wallets: Optional[List[GoogleCloudApigeeV1DeveloperBalanceWallet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wallets') }})
    
