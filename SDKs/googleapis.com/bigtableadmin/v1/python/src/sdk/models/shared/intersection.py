from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Intersection:
    r"""Intersection
    A GcRule which deletes cells matching all of the given rules.
    """
    
    rules: Optional[List[GcRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
