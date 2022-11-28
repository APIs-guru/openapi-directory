from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkAdResponse:
    r"""BulkAdResponse
    This type defines the fields for the create ads in bulk response.
    """
    
    responses: Optional[List[AdResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
