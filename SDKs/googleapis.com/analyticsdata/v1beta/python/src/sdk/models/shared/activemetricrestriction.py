from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActiveMetricRestrictionRestrictedMetricTypesEnum(str, Enum):
    RESTRICTED_METRIC_TYPE_UNSPECIFIED = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
    COST_DATA = "COST_DATA"
    REVENUE_DATA = "REVENUE_DATA"


@dataclass_json
@dataclass
class ActiveMetricRestriction:
    r"""ActiveMetricRestriction
    A metric actively restricted in creating the report.
    """
    
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    restricted_metric_types: Optional[List[ActiveMetricRestrictionRestrictedMetricTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedMetricTypes') }})
    
