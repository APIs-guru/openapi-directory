from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceQuota:
    r"""ServiceQuota
    Information about a quota.
    """
    
    adjustable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Adjustable') }})
    error_reason: Optional[ErrorReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorReason') }})
    global_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalQuota') }})
    period: Optional[QuotaPeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Period') }})
    quota_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaArn') }})
    quota_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaCode') }})
    quota_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaName') }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    usage_metric: Optional[MetricInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageMetric') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
