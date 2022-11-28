from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchRequest:
    r"""BatchRequest
    A request object for use in a batch request.
    """
    
    actions: Optional[List[BatchRequestAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    
