from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelDataQuality:
    r"""ModelDataQuality
    Data quality constraints and statistics for a model.
    """
    
    constraints: Optional[MetricsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Constraints') }})
    statistics: Optional[MetricsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statistics') }})
    
