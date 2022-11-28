from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGovCloudAccountRequest:
    account_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountName') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    iam_user_access_to_billing: Optional[IamUserAccessToBillingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamUserAccessToBilling') }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
