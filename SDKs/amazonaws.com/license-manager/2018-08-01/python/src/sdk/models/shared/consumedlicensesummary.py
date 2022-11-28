from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsumedLicenseSummary:
    r"""ConsumedLicenseSummary
    Details about license consumption.
    """
    
    consumed_licenses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedLicenses') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
