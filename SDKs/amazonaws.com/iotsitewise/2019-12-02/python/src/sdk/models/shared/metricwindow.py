from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricWindow:
    r"""MetricWindow
    Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
    """
    
    tumbling: Optional[TumblingWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tumbling') }})
    
