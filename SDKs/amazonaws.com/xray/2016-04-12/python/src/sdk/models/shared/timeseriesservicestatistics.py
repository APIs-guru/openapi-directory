from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeSeriesServiceStatistics:
    r"""TimeSeriesServiceStatistics
    A list of TimeSeriesStatistic structures.
    """
    
    edge_summary_statistics: Optional[EdgeStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdgeSummaryStatistics') }})
    response_time_histogram: Optional[List[HistogramEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTimeHistogram') }})
    service_forecast_statistics: Optional[ForecastStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceForecastStatistics') }})
    service_summary_statistics: Optional[ServiceStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceSummaryStatistics') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
