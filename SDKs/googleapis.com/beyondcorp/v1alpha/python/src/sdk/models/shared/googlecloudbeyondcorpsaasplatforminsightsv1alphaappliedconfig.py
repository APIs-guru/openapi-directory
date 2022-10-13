from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpsaasplatforminsightsv1alphacustomgrouping

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
    aggregation: Optional[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregation' }})
    custom_grouping: Optional[googlecloudbeyondcorpsaasplatforminsightsv1alphacustomgrouping.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customGrouping' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    field_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldFilter' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
