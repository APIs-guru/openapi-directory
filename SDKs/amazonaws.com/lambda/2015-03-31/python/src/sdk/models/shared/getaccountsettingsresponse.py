from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAccountSettingsResponse:
    account_limit: Optional[AccountLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountLimit') }})
    account_usage: Optional[AccountUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountUsage') }})
    
