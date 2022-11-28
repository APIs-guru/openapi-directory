from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkDeleteAdResponse:
    r"""BulkDeleteAdResponse
    This type defines a container that lists the ads that bulkDeleteAdsByListingId deleted.
    """
    
    responses: Optional[List[DeleteAdResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
