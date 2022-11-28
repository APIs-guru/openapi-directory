from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkCreateAdRequest:
    r"""BulkCreateAdRequest
    This type defines the fields for the create ads in bulk by listing IDs.
    """
    
    requests: Optional[List[CreateAdRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
