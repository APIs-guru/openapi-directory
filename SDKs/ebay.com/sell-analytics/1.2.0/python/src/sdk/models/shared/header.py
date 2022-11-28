from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Header:
    r"""Header
    Type that defines the headers for the dimension keys and metrics returned in the report.
    """
    
    dimension_keys: Optional[List[Definition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionKeys') }})
    metrics: Optional[List[Definition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
