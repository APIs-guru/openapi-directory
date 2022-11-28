from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeCommunicationsResponse:
    r"""DescribeCommunicationsResponse
    The communications returned by the <a>DescribeCommunications</a> operation.
    """
    
    communications: Optional[List[Communication]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communications') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
