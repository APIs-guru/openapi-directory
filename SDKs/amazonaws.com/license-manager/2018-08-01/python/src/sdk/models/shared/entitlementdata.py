from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntitlementData:
    r"""EntitlementData
    Data associated with an entitlement resource.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    unit: EntitlementDataUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
