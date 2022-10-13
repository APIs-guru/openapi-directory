from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadatafield

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
    aggregations: Optional[List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregations' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    fields: Optional[List[googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadatafield.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    sub_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subCategory' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
