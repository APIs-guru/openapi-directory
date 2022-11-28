from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShareDetails:
    r"""ShareDetails
    Information about the portfolio share operation.
    """
    
    share_errors: Optional[List[ShareError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareErrors') }})
    successful_shares: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessfulShares') }})
    
