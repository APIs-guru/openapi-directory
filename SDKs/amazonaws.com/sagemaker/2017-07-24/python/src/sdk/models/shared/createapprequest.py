from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAppRequest:
    app_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppName') }})
    app_type: AppTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppType') }})
    domain_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainId') }})
    user_profile_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserProfileName') }})
    resource_spec: Optional[ResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceSpec') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
