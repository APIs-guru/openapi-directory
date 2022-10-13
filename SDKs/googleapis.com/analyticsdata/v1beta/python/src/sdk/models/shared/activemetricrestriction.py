from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ActiveMetricRestrictionRestrictedMetricTypesEnum(str, Enum):
    RESTRICTED_METRIC_TYPE_UNSPECIFIED = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
    COST_DATA = "COST_DATA"
    REVENUE_DATA = "REVENUE_DATA"


@dataclass_json
@dataclass
class ActiveMetricRestriction:
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    restricted_metric_types: Optional[List[ActiveMetricRestrictionRestrictedMetricTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedMetricTypes' }})
    
