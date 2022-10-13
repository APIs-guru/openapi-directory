from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MetricFormattingTypeEnum(str, Enum):
    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    INTEGER = "INTEGER"
    FLOAT = "FLOAT"
    CURRENCY = "CURRENCY"
    PERCENT = "PERCENT"
    TIME = "TIME"


@dataclass_json
@dataclass
class Metric:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    formatting_type: Optional[MetricFormattingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattingType' }})
    
