from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountQuota:
    quota_remaining: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaRemaining' }})
    quota_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaTotal' }})
    quota_used: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaUsed' }})
    

@dataclass_json
@dataclass
class Account:
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    quota: Optional[AccountQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    
