from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ViewTraffic:
    r"""ViewTraffic
    View Traffic
    """
    
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    uniques: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniques') }})
    views: List[Traffic] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    
