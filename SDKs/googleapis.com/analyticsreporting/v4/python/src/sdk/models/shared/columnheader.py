from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnHeader:
    r"""ColumnHeader
    Column headers.
    """
    
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metric_header: Optional[MetricHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricHeader') }})
    
