from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1AdjustDeveloperBalanceRequest:
    r"""GoogleCloudApigeeV1AdjustDeveloperBalanceRequest
    Request for AdjustDeveloperBalance.
    """
    
    adjustment: Optional[GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustment') }})
    
