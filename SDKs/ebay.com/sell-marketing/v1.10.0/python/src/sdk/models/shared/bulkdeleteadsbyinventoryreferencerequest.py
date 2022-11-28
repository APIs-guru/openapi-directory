from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkDeleteAdsByInventoryReferenceRequest:
    r"""BulkDeleteAdsByInventoryReferenceRequest
    This type defines the request fields that bulkDeleteAdsByInventoryReference uses to delete ads in bulk.
    """
    
    requests: Optional[List[DeleteAdsByInventoryReferenceRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
