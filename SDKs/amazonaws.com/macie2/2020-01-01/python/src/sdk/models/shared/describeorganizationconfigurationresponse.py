from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeOrganizationConfigurationResponse:
    auto_enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoEnable') }})
    max_account_limit_reached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAccountLimitReached') }})
    
