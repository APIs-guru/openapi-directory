from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Metric
    [Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period.
    """
    
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    formatting_type: Optional[MetricFormattingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattingType') }})
    
