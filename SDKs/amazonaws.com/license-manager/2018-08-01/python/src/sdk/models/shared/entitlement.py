from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Entitlement:
    r"""Entitlement
    Describes a resource entitled for use with a license.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    unit: EntitlementUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    allow_check_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowCheckIn') }})
    max_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCount') }})
    overage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overage') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
