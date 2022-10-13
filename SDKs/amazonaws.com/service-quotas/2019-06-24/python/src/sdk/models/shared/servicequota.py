from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorreason
from . import quotaperiod
from . import metricinfo


@dataclass_json
@dataclass
class ServiceQuota:
    adjustable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Adjustable' }})
    error_reason: Optional[errorreason.ErrorReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorReason' }})
    global_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalQuota' }})
    period: Optional[quotaperiod.QuotaPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Period' }})
    quota_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotaArn' }})
    quota_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotaCode' }})
    quota_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotaName' }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCode' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    usage_metric: Optional[metricinfo.MetricInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageMetric' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
