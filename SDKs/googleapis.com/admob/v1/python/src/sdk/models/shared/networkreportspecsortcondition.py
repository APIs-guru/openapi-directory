from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NetworkReportSpecSortConditionDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    DATE = "DATE"
    MONTH = "MONTH"
    WEEK = "WEEK"
    AD_UNIT = "AD_UNIT"
    APP = "APP"
    AD_TYPE = "AD_TYPE"
    COUNTRY = "COUNTRY"
    FORMAT = "FORMAT"
    PLATFORM = "PLATFORM"
    MOBILE_OS_VERSION = "MOBILE_OS_VERSION"
    GMA_SDK_VERSION = "GMA_SDK_VERSION"
    APP_VERSION_NAME = "APP_VERSION_NAME"
    SERVING_RESTRICTION = "SERVING_RESTRICTION"

class NetworkReportSpecSortConditionMetricEnum(str, Enum):
    METRIC_UNSPECIFIED = "METRIC_UNSPECIFIED"
    AD_REQUESTS = "AD_REQUESTS"
    CLICKS = "CLICKS"
    ESTIMATED_EARNINGS = "ESTIMATED_EARNINGS"
    IMPRESSIONS = "IMPRESSIONS"
    IMPRESSION_CTR = "IMPRESSION_CTR"
    IMPRESSION_RPM = "IMPRESSION_RPM"
    MATCHED_REQUESTS = "MATCHED_REQUESTS"
    MATCH_RATE = "MATCH_RATE"
    SHOW_RATE = "SHOW_RATE"

class NetworkReportSpecSortConditionOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class NetworkReportSpecSortCondition:
    dimension: Optional[NetworkReportSpecSortConditionDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    metric: Optional[NetworkReportSpecSortConditionMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    order: Optional[NetworkReportSpecSortConditionOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
