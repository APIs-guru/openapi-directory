from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum(str, Enum):
    AGGREGATION_UNSPECIFIED = "AGGREGATION_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    CUSTOM_DATE_RANGE = "CUSTOM_DATE_RANGE"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig:
    r"""GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig
    The configuration that was applied to generate the result.
    """
    
    aggregation: Optional[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregation') }})
    custom_grouping: Optional[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customGrouping') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    field_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldFilter') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
