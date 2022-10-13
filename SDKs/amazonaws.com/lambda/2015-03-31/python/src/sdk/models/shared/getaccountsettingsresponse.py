from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountlimit
from . import accountusage


@dataclass_json
@dataclass
class GetAccountSettingsResponse:
    account_limit: Optional[accountlimit.AccountLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountLimit' }})
    account_usage: Optional[accountusage.AccountUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountUsage' }})
    
