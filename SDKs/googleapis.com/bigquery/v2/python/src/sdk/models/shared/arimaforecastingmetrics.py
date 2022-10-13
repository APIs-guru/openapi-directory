from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import arimafittingmetrics
from . import arimasinglemodelforecastingmetrics
from . import arimaorder

class ArimaForecastingMetricsSeasonalPeriodsEnum(str, Enum):
    SEASONAL_PERIOD_TYPE_UNSPECIFIED = "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
    NO_SEASONALITY = "NO_SEASONALITY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    YEARLY = "YEARLY"


@dataclass_json
@dataclass
class ArimaForecastingMetrics:
    arima_fitting_metrics: Optional[List[arimafittingmetrics.ArimaFittingMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arimaFittingMetrics' }})
    arima_single_model_forecasting_metrics: Optional[List[arimasinglemodelforecastingmetrics.ArimaSingleModelForecastingMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arimaSingleModelForecastingMetrics' }})
    has_drift: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasDrift' }})
    non_seasonal_order: Optional[List[arimaorder.ArimaOrder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonSeasonalOrder' }})
    seasonal_periods: Optional[List[ArimaForecastingMetricsSeasonalPeriodsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasonalPeriods' }})
    time_series_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesId' }})
    
