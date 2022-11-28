from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutomaticScaling:
    r"""AutomaticScaling
    Automatic scaling is based on request rate, response latencies, and other application metrics.
    """
    
    cool_down_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coolDownPeriod') }})
    cpu_utilization: Optional[CPUUtilization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilization') }})
    custom_metrics: Optional[List[CustomMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetrics') }})
    disk_utilization: Optional[DiskUtilization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskUtilization') }})
    max_concurrent_requests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentRequests') }})
    max_idle_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIdleInstances') }})
    max_pending_latency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPendingLatency') }})
    max_total_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTotalInstances') }})
    min_idle_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minIdleInstances') }})
    min_pending_latency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPendingLatency') }})
    min_total_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minTotalInstances') }})
    network_utilization: Optional[NetworkUtilization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUtilization') }})
    request_utilization: Optional[RequestUtilization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestUtilization') }})
    standard_scheduler_settings: Optional[StandardSchedulerSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardSchedulerSettings') }})
    
