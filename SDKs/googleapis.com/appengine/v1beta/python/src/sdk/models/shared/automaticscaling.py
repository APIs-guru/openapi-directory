from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cpuutilization
from . import custommetric
from . import diskutilization
from . import networkutilization
from . import requestutilization
from . import standardschedulersettings


@dataclass_json
@dataclass
class AutomaticScaling:
    cool_down_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coolDownPeriod' }})
    cpu_utilization: Optional[cpuutilization.CPUUtilization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuUtilization' }})
    custom_metrics: Optional[List[custommetric.CustomMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMetrics' }})
    disk_utilization: Optional[diskutilization.DiskUtilization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskUtilization' }})
    max_concurrent_requests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConcurrentRequests' }})
    max_idle_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIdleInstances' }})
    max_pending_latency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPendingLatency' }})
    max_total_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTotalInstances' }})
    min_idle_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minIdleInstances' }})
    min_pending_latency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minPendingLatency' }})
    min_total_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minTotalInstances' }})
    network_utilization: Optional[networkutilization.NetworkUtilization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUtilization' }})
    request_utilization: Optional[requestutilization.RequestUtilization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestUtilization' }})
    standard_scheduler_settings: Optional[standardschedulersettings.StandardSchedulerSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardSchedulerSettings' }})
    
