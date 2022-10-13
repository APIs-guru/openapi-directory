from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assumedrole
from . import awsaccount
from . import awsservice
from . import federateduser
from . import iamuser
from . import useridentityroot
from . import useridentitytype_enum


@dataclass_json
@dataclass
class UserIdentity:
    assumed_role: Optional[assumedrole.AssumedRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assumedRole' }})
    aws_account: Optional[awsaccount.AwsAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccount' }})
    aws_service: Optional[awsservice.AwsService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsService' }})
    federated_user: Optional[federateduser.FederatedUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federatedUser' }})
    iam_user: Optional[iamuser.IamUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamUser' }})
    root: Optional[useridentityroot.UserIdentityRoot] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root' }})
    type: Optional[useridentitytype_enum.UserIdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
