from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkCreateAdsByInventoryReferenceRequest:
    r"""BulkCreateAdsByInventoryReferenceRequest
    This type defines the fields used to create ads in bulk by inventory reference IDs.
    """
    
    requests: Optional[List[CreateAdsByInventoryReferenceRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
