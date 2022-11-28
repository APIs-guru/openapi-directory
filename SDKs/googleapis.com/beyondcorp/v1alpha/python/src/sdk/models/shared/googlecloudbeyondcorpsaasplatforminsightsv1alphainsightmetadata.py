from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum(str, Enum):
    AGGREGATION_UNSPECIFIED = "AGGREGATION_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    CUSTOM_DATE_RANGE = "CUSTOM_DATE_RANGE"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata:
    r"""GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata
    Insight filters, groupings and aggregations that can be applied for the insight. Examples: aggregations, groups, field filters.
    """
    
    aggregations: Optional[List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregations') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fields: Optional[List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    sub_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCategory') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
