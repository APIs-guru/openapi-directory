from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetServiceQuotaIncreaseRequestFromTemplateResponse:
    service_quota_increase_request_in_template: Optional[ServiceQuotaIncreaseRequestInTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceQuotaIncreaseRequestInTemplate') }})
    
