from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkDeleteAdRequest:
    r"""BulkDeleteAdRequest
    This type defines the fields that the call uses to remove ads in bulk.
    """
    
    requests: Optional[List[DeleteAdRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
