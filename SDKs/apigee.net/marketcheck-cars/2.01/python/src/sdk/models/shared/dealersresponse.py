from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DealersResponse:
    r"""DealersResponse
    Dealers Response
    """
    
    dealers: Optional[List[Dealer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealers') }})
    num_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_found') }})
    
