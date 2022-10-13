from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IamUser:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
