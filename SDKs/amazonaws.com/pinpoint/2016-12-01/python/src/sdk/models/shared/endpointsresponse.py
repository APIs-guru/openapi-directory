from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointsResponse:
    r"""EndpointsResponse
    Provides information about all the endpoints that are associated with a user ID.
    """
    
    item: List[EndpointResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    
