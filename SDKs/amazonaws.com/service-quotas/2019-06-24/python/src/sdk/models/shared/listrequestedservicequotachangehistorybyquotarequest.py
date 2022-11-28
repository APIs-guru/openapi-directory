from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRequestedServiceQuotaChangeHistoryByQuotaRequest:
    quota_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaCode') }})
    service_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
