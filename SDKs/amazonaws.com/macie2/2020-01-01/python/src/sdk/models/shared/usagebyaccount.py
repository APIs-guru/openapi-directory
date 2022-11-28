from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsageByAccount:
    r"""UsageByAccount
    Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.
    """
    
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    estimated_cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedCost') }})
    service_limit: Optional[ServiceLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLimit') }})
    type: Optional[UsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
