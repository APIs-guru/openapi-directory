from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MediationReportSpecSortConditionDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    DATE = "DATE"
    MONTH = "MONTH"
    WEEK = "WEEK"
    AD_SOURCE = "AD_SOURCE"
    AD_SOURCE_INSTANCE = "AD_SOURCE_INSTANCE"
    AD_UNIT = "AD_UNIT"
    APP = "APP"
    MEDIATION_GROUP = "MEDIATION_GROUP"
    COUNTRY = "COUNTRY"
    FORMAT = "FORMAT"
    PLATFORM = "PLATFORM"
    MOBILE_OS_VERSION = "MOBILE_OS_VERSION"
    GMA_SDK_VERSION = "GMA_SDK_VERSION"
    APP_VERSION_NAME = "APP_VERSION_NAME"
    SERVING_RESTRICTION = "SERVING_RESTRICTION"

class MediationReportSpecSortConditionMetricEnum(str, Enum):
    METRIC_UNSPECIFIED = "METRIC_UNSPECIFIED"
    AD_REQUESTS = "AD_REQUESTS"
    CLICKS = "CLICKS"
    ESTIMATED_EARNINGS = "ESTIMATED_EARNINGS"
    IMPRESSIONS = "IMPRESSIONS"
    IMPRESSION_CTR = "IMPRESSION_CTR"
    MATCHED_REQUESTS = "MATCHED_REQUESTS"
    MATCH_RATE = "MATCH_RATE"
    OBSERVED_ECPM = "OBSERVED_ECPM"

class MediationReportSpecSortConditionOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class MediationReportSpecSortCondition:
    r"""MediationReportSpecSortCondition
    Sorting direction to be applied on a dimension or a metric.
    """
    
    dimension: Optional[MediationReportSpecSortConditionDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    metric: Optional[MediationReportSpecSortConditionMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    order: Optional[MediationReportSpecSortConditionOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    
