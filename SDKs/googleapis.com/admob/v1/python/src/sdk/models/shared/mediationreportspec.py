from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MediationReportSpecDimensionsEnum(str, Enum):
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

class MediationReportSpecMetricsEnum(str, Enum):
    METRIC_UNSPECIFIED = "METRIC_UNSPECIFIED"
    AD_REQUESTS = "AD_REQUESTS"
    CLICKS = "CLICKS"
    ESTIMATED_EARNINGS = "ESTIMATED_EARNINGS"
    IMPRESSIONS = "IMPRESSIONS"
    IMPRESSION_CTR = "IMPRESSION_CTR"
    MATCHED_REQUESTS = "MATCHED_REQUESTS"
    MATCH_RATE = "MATCH_RATE"
    OBSERVED_ECPM = "OBSERVED_ECPM"


@dataclass_json
@dataclass
class MediationReportSpec:
    r"""MediationReportSpec
    The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { \"date_range\": { \"start_date\": {\"year\": 2021, \"month\": 9, \"day\": 1}, \"end_date\": {\"year\": 2021, \"month\": 9, \"day\": 30} }, \"dimensions\": [\"AD_SOURCE\", \"APP\", \"COUNTRY\"], \"metrics\": [\"OBSERVED_ECPM\"], \"dimension_filters\": [ { \"dimension\": \"COUNTRY\", \"matches_any\": {\"values\": [{\"value\": \"US\", \"value\": \"CN\"}]} } ], \"sort_conditions\": [ {\"dimension\":\"APP\", order: \"ASCENDING\"} ], \"localization_settings\": { \"currency_code\": \"USD\", \"language_code\": \"en-US\" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;
    """
    
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension_filters: Optional[List[MediationReportSpecDimensionFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilters') }})
    dimensions: Optional[List[MediationReportSpecDimensionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    localization_settings: Optional[LocalizationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizationSettings') }})
    max_report_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxReportRows') }})
    metrics: Optional[List[MediationReportSpecMetricsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    sort_conditions: Optional[List[MediationReportSpecSortCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortConditions') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
