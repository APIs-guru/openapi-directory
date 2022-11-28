from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecencyDimension:
    r"""RecencyDimension
    Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
    """
    
    duration: DurationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    recency_type: RecencyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecencyType') }})
    
