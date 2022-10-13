from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import iamuseraccesstobilling_enum
from . import tag


@dataclass_json
@dataclass
class CreateAccountRequest:
    account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountName' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    iam_user_access_to_billing: Optional[iamuseraccesstobilling_enum.IamUserAccessToBillingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamUserAccessToBilling' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
