from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyAccountRequest:
    dedicated_tenancy_management_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedTenancyManagementCidrRange') }})
    dedicated_tenancy_support: Optional[DedicatedTenancySupportEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedTenancySupport') }})
    
