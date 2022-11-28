from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerListDpcsResponse:
    r"""CustomerListDpcsResponse
    Response message of customer's listing DPCs.
    """
    
    dpcs: Optional[List[Dpc]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpcs') }})
    
