from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListServiceQuotaIncreaseRequestsInTemplateResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    service_quota_increase_request_in_template_list: Optional[List[ServiceQuotaIncreaseRequestInTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceQuotaIncreaseRequestInTemplateList') }})
    
