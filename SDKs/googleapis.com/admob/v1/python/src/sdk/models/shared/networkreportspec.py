from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""NetworkReportSpec
    The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;
    """
    
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension_filters: Optional[List[NetworkReportSpecDimensionFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    dimensions: Optional[List[NetworkReportSpecDimensionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    localization_settings: Optional[LocalizationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizationSettings') }})
    max_report_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxReportRows') }})
    metrics: Optional[List[NetworkReportSpecMetricsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    sort_conditions: Optional[List[NetworkReportSpecSortCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortConditions') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
