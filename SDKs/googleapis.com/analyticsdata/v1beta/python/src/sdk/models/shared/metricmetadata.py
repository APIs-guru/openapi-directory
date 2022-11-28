from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MetricMetadataBlockedReasonsEnum(str, Enum):
    BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED"
    NO_REVENUE_METRICS = "NO_REVENUE_METRICS"
    NO_COST_METRICS = "NO_COST_METRICS"

class MetricMetadataTypeEnum(str, Enum):
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
class MetricMetadata:
    r"""MetricMetadata
    Explains a metric.
    """
    
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiName') }})
    blocked_reasons: Optional[List[MetricMetadataBlockedReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedReasons') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    custom_definition: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDefinition') }})
    deprecated_api_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecatedApiNames') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    type: Optional[MetricMetadataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ui_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uiName') }})
    
