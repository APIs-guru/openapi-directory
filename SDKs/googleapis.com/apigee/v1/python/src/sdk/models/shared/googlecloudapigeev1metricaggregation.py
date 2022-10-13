from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudApigeeV1MetricAggregationAggregationEnum(str, Enum):
    AGGREGATION_FUNCTION_UNSPECIFIED = "AGGREGATION_FUNCTION_UNSPECIFIED"
    AVG = "AVG"
    SUM = "SUM"
    MIN = "MIN"
    MAX = "MAX"
    COUNT_DISTINCT = "COUNT_DISTINCT"

class GoogleCloudApigeeV1MetricAggregationOrderEnum(str, Enum):
    ORDER_UNSPECIFIED = "ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1MetricAggregation:
    aggregation: Optional[GoogleCloudApigeeV1MetricAggregationAggregationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order: Optional[GoogleCloudApigeeV1MetricAggregationOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
