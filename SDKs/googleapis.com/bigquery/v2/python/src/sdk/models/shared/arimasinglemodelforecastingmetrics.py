from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import arimafittingmetrics
from . import arimaorder

class ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum(str, Enum):
    SEASONAL_PERIOD_TYPE_UNSPECIFIED = "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
    NO_SEASONALITY = "NO_SEASONALITY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    YEARLY = "YEARLY"


@dataclass_json
@dataclass
class ArimaSingleModelForecastingMetrics:
    arima_fitting_metrics: Optional[arimafittingmetrics.ArimaFittingMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arimaFittingMetrics' }})
    has_drift: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasDrift' }})
    has_holiday_effect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasHolidayEffect' }})
    has_spikes_and_dips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasSpikesAndDips' }})
    has_step_changes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasStepChanges' }})
    non_seasonal_order: Optional[arimaorder.ArimaOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonSeasonalOrder' }})
    seasonal_periods: Optional[List[ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasonalPeriods' }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesId' }})
    time_series_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesIds' }})
    
