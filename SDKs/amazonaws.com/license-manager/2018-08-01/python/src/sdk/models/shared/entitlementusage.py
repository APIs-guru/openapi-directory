from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntitlementUsage:
    r"""EntitlementUsage
    Usage associated with an entitlement resource.
    """
    
    consumed_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedValue') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    unit: EntitlementDataUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    max_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCount') }})
    
