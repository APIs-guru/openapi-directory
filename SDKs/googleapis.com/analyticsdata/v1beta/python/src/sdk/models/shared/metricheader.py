from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MetricHeaderTypeEnum(str, Enum):
    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    TYPE_INTEGER = "TYPE_INTEGER"
    TYPE_FLOAT = "TYPE_FLOAT"
    TYPE_SECONDS = "TYPE_SECONDS"
    TYPE_MILLISECONDS = "TYPE_MILLISECONDS"
    TYPE_MINUTES = "TYPE_MINUTES"
    TYPE_HOURS = "TYPE_HOURS"
    TYPE_STANDARD = "TYPE_STANDARD"
    TYPE_CURRENCY = "TYPE_CURRENCY"
    TYPE_FEET = "TYPE_FEET"
    TYPE_MILES = "TYPE_MILES"
    TYPE_METERS = "TYPE_METERS"
    TYPE_KILOMETERS = "TYPE_KILOMETERS"


@dataclass_json
@dataclass
class MetricHeader:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[MetricHeaderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
