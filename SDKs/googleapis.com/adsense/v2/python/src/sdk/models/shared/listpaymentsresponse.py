from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPaymentsResponse:
    r"""ListPaymentsResponse
    Response definition for the payments list rpc.
    """
    
    payments: Optional[List[Payment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    
