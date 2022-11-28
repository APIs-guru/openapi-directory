from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FilterSetBreakdownDimensionsEnum(str, Enum):
    BREAKDOWN_DIMENSION_UNSPECIFIED = "BREAKDOWN_DIMENSION_UNSPECIFIED"
    PUBLISHER_IDENTIFIER = "PUBLISHER_IDENTIFIER"

class FilterSetEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    WEB = "WEB"
    APP = "APP"

class FilterSetFormatEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    NATIVE_DISPLAY = "NATIVE_DISPLAY"
    NATIVE_VIDEO = "NATIVE_VIDEO"
    NON_NATIVE_DISPLAY = "NON_NATIVE_DISPLAY"
    NON_NATIVE_VIDEO = "NON_NATIVE_VIDEO"

class FilterSetFormatsEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    NATIVE_DISPLAY = "NATIVE_DISPLAY"
    NATIVE_VIDEO = "NATIVE_VIDEO"
    NON_NATIVE_DISPLAY = "NON_NATIVE_DISPLAY"
    NON_NATIVE_VIDEO = "NON_NATIVE_VIDEO"

class FilterSetPlatformsEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    DESKTOP = "DESKTOP"
    TABLET = "TABLET"
    MOBILE = "MOBILE"

class FilterSetTimeSeriesGranularityEnum(str, Enum):
    TIME_SERIES_GRANULARITY_UNSPECIFIED = "TIME_SERIES_GRANULARITY_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class FilterSet:
    r"""FilterSet
    A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, \"format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)\".
    """
    
    absolute_date_range: Optional[AbsoluteDateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absoluteDateRange') }})
    breakdown_dimensions: Optional[List[FilterSetBreakdownDimensionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakdownDimensions') }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealId') }})
    environment: Optional[FilterSetEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    format: Optional[FilterSetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    formats: Optional[List[FilterSetFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formats') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platforms: Optional[List[FilterSetPlatformsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    publisher_identifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherIdentifiers') }})
    realtime_time_range: Optional[RealtimeTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realtimeTimeRange') }})
    relative_date_range: Optional[RelativeDateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeDateRange') }})
    seller_network_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerNetworkIds') }})
    time_series_granularity: Optional[FilterSetTimeSeriesGranularityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesGranularity') }})
    
