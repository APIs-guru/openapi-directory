from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MetricHeaderEntryTypeEnum(str, Enum):
    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    INTEGER = "INTEGER"
    FLOAT = "FLOAT"
    CURRENCY = "CURRENCY"
    PERCENT = "PERCENT"
    TIME = "TIME"


@dataclass_json
@dataclass
class MetricHeaderEntry:
    r"""MetricHeaderEntry
    Header for the metrics.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[MetricHeaderEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
