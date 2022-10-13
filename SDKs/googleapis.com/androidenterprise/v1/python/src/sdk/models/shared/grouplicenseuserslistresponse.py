from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class GroupLicenseUsersListResponse:
    user: Optional[List[user.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
