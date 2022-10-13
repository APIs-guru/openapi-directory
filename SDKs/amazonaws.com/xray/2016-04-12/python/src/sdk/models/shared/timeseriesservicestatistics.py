from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import edgestatistics
from . import histogramentry
from . import forecaststatistics
from . import servicestatistics


@dataclass_json
@dataclass
class TimeSeriesServiceStatistics:
    edge_summary_statistics: Optional[edgestatistics.EdgeStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgeSummaryStatistics' }})
    response_time_histogram: Optional[List[histogramentry.HistogramEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseTimeHistogram' }})
    service_forecast_statistics: Optional[forecaststatistics.ForecastStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceForecastStatistics' }})
    service_summary_statistics: Optional[servicestatistics.ServiceStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceSummaryStatistics' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
