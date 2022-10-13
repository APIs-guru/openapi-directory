from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[MetricHeaderEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
