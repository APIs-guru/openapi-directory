from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimestampStats:
    r"""TimestampStats
    The data statistics of a series of TIMESTAMP values.
    """
    
    granular_stats: Optional[dict[str, GranularStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('granularStats') }})
    
