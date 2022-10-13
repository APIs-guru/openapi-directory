from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import daterange
from . import networkreportspecdimensionfilter
from . import localizationsettings
from . import networkreportspecsortcondition

class NetworkReportSpecDimensionsEnum(str, Enum):
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

class NetworkReportSpecMetricsEnum(str, Enum):
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


@dataclass_json
@dataclass
class NetworkReportSpec:
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    dimension_filters: Optional[List[networkreportspecdimensionfilter.NetworkReportSpecDimensionFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilters' }})
    dimensions: Optional[List[NetworkReportSpecDimensionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    localization_settings: Optional[localizationsettings.LocalizationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizationSettings' }})
    max_report_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxReportRows' }})
    metrics: Optional[List[NetworkReportSpecMetricsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    sort_conditions: Optional[List[networkreportspecsortcondition.NetworkReportSpecSortCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortConditions' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
