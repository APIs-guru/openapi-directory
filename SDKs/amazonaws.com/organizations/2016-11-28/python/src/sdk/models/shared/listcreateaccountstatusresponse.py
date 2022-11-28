from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCreateAccountStatusResponse:
    create_account_statuses: Optional[List[CreateAccountStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateAccountStatuses') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
