from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItvSubscriptionState:
    effective_entitlements: List[ItvEntitlement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective_entitlements') }})
    failed_availability_checks: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed_availability_checks') }})
    purchased: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchased') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
