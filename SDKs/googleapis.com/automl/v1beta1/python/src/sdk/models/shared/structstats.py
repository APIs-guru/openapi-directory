from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StructStats:
    r"""StructStats
    The data statistics of a series of STRUCT values.
    """
    
    field_stats: Optional[dict[str, DataStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldStats') }})
    
