from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArrayStats:
    r"""ArrayStats
    The data statistics of a series of ARRAY values.
    """
    
    member_stats: Optional[DataStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberStats') }})
    
