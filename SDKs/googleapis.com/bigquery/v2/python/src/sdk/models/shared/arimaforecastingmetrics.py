from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ArimaForecastingMetrics
    Model evaluation metrics for ARIMA forecasting models.
    """
    
    arima_fitting_metrics: Optional[List[ArimaFittingMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arimaFittingMetrics') }})
    arima_single_model_forecasting_metrics: Optional[List[ArimaSingleModelForecastingMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arimaSingleModelForecastingMetrics') }})
    has_drift: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasDrift') }})
    non_seasonal_order: Optional[List[ArimaOrder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonSeasonalOrder') }})
    seasonal_periods: Optional[List[ArimaForecastingMetricsSeasonalPeriodsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonalPeriods') }})
    time_series_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesId') }})
    
