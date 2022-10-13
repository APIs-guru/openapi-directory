from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsAPIGatewayV2RouteSettings:
    data_trace_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataTraceEnabled' }})
    detailed_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailedMetricsEnabled' }})
    logging_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingLevel' }})
    throttling_burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThrottlingBurstLimit' }})
    throttling_rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThrottlingRateLimit' }})
    
