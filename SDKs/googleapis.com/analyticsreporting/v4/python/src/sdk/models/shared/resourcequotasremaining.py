from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceQuotasRemaining:
    r"""ResourceQuotasRemaining
    The resource quota tokens remaining for the property after the request is completed.
    """
    
    daily_quota_tokens_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyQuotaTokensRemaining') }})
    hourly_quota_tokens_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourlyQuotaTokensRemaining') }})
    
