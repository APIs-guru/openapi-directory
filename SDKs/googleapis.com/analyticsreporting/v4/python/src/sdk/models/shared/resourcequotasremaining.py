from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceQuotasRemaining:
    daily_quota_tokens_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyQuotaTokensRemaining' }})
    hourly_quota_tokens_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourlyQuotaTokensRemaining' }})
    
