from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createaccountstatus


@dataclass_json
@dataclass
class ListCreateAccountStatusResponse:
    create_account_statuses: Optional[List[createaccountstatus.CreateAccountStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateAccountStatuses' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
