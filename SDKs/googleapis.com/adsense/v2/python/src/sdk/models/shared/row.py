from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Row:
    r"""Row
    Row representation.
    """
    
    cells: Optional[List[Cell]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cells') }})
    
