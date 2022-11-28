from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricDistribution:
    r"""MetricDistribution
    This complex data type describes the metric distribution by basis.
    """
    
    basis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basis') }})
    data: Optional[List[Distribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
