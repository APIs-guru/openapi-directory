from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAppRequest:
    app_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppName') }})
    app_type: AppTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppType') }})
    domain_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainId') }})
    user_profile_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserProfileName') }})
    
