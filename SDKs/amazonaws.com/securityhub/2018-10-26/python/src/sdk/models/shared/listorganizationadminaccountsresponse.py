from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adminaccount


@dataclass_json
@dataclass
class ListOrganizationAdminAccountsResponse:
    admin_accounts: Optional[List[adminaccount.AdminAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminAccounts' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
