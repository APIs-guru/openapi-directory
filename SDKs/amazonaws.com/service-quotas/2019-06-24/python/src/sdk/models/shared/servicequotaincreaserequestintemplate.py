from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceQuotaIncreaseRequestInTemplate:
    r"""ServiceQuotaIncreaseRequestInTemplate
    Information about a quota increase request.
    """
    
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegion') }})
    desired_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredValue') }})
    global_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalQuota') }})
    quota_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaCode') }})
    quota_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaName') }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
