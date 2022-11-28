from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    This complex type defines the resource (API method) and the current rate-limit data for that resource.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rates: Optional[List[Rate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    
