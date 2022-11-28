from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserIdentity:
    r"""UserIdentity
    Provides information about the type and other characteristics of an entity that performed an action on an affected resource.
    """
    
    assumed_role: Optional[AssumedRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assumedRole') }})
    aws_account: Optional[AwsAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccount') }})
    aws_service: Optional[AwsService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsService') }})
    federated_user: Optional[FederatedUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federatedUser') }})
    iam_user: Optional[IamUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamUser') }})
    root: Optional[UserIdentityRoot] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    type: Optional[UserIdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
