from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TooManyRequestsException:
    r"""TooManyRequestsException
     Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. 
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
