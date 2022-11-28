from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkCreateAdsByInventoryReferenceResponse:
    r"""BulkCreateAdsByInventoryReferenceResponse
    This type defines the response fields used by the bulkCreateAdsByInventoryReference method.
    """
    
    responses: Optional[List[CreateAdsByInventoryReferenceResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
