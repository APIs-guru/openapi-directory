from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import awsiamaccesskeysessioncontext
from . import awsiamaccesskeystatus_enum


@dataclass_json
@dataclass
class AwsIamAccessKeyDetails:
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessKeyId' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalId' }})
    principal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalName' }})
    principal_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalType' }})
    session_context: Optional[awsiamaccesskeysessioncontext.AwsIamAccessKeySessionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionContext' }})
    status: Optional[awsiamaccesskeystatus_enum.AwsIamAccessKeyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
