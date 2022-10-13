from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum(str, Enum):
    ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED"
    ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS"
    ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS"

class GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum(str, Enum):
    OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED"
    OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS"
    OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS"
    OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS"

class GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum(str, Enum):
    REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED = "REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED"
    CROSS_CHANNEL_DATA_DRIVEN = "CROSS_CHANNEL_DATA_DRIVEN"
    CROSS_CHANNEL_LAST_CLICK = "CROSS_CHANNEL_LAST_CLICK"
    CROSS_CHANNEL_FIRST_CLICK = "CROSS_CHANNEL_FIRST_CLICK"
    CROSS_CHANNEL_LINEAR = "CROSS_CHANNEL_LINEAR"
    CROSS_CHANNEL_POSITION_BASED = "CROSS_CHANNEL_POSITION_BASED"
    CROSS_CHANNEL_TIME_DECAY = "CROSS_CHANNEL_TIME_DECAY"
    ADS_PREFERRED_LAST_CLICK = "ADS_PREFERRED_LAST_CLICK"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAttributionSettings:
    acquisition_conversion_event_lookback_window: Optional[GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acquisitionConversionEventLookbackWindow' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    other_conversion_event_lookback_window: Optional[GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherConversionEventLookbackWindow' }})
    reporting_attribution_model: Optional[GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingAttributionModel' }})
    
