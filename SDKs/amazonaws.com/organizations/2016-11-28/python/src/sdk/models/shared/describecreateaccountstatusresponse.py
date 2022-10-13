from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createaccountstatus


@dataclass_json
@dataclass
class DescribeCreateAccountStatusResponse:
    create_account_status: Optional[createaccountstatus.CreateAccountStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateAccountStatus' }})
    
