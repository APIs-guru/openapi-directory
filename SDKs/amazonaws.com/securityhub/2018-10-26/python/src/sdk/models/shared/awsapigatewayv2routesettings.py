from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsAPIGatewayV2RouteSettings:
    r"""AwsAPIGatewayV2RouteSettings
    Contains route settings for a stage.
    """
    
    data_trace_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataTraceEnabled') }})
    detailed_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetailedMetricsEnabled') }})
    logging_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingLevel') }})
    throttling_burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThrottlingBurstLimit') }})
    throttling_rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThrottlingRateLimit') }})
    
