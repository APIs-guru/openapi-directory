from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceNetworking:
    r"""InstanceNetworking
    Describes monthly data transfer rates and port information for an instance.
    """
    
    monthly_transfer: Optional[MonthlyTransfer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlyTransfer') }})
    ports: Optional[List[InstancePortInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
