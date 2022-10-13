from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import absolutedaterange
from . import realtimetimerange
from . import relativedaterange

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
    absolute_date_range: Optional[absolutedaterange.AbsoluteDateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absoluteDateRange' }})
    breakdown_dimensions: Optional[List[FilterSetBreakdownDimensionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breakdownDimensions' }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeId' }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealId' }})
    environment: Optional[FilterSetEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    format: Optional[FilterSetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    formats: Optional[List[FilterSetFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formats' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platforms: Optional[List[FilterSetPlatformsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platforms' }})
    publisher_identifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherIdentifiers' }})
    realtime_time_range: Optional[realtimetimerange.RealtimeTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realtimeTimeRange' }})
    relative_date_range: Optional[relativedaterange.RelativeDateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeDateRange' }})
    seller_network_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerNetworkIds' }})
    time_series_granularity: Optional[FilterSetTimeSeriesGranularityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesGranularity' }})
    
