from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavingsPlanOfferingRateFilterElement:
    r"""SavingsPlanOfferingRateFilterElement
    Information about a filter.
    """
    
    name: Optional[SavingsPlanRateFilterAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
