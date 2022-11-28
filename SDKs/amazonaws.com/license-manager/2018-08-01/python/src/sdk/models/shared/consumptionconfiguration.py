from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsumptionConfiguration:
    r"""ConsumptionConfiguration
    Details about a consumption configuration.
    """
    
    borrow_configuration: Optional[BorrowConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BorrowConfiguration') }})
    provisional_configuration: Optional[ProvisionalConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionalConfiguration') }})
    renew_type: Optional[RenewTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewType') }})
    
