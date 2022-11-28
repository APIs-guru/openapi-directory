from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Programs:
    r"""Programs
    A list of the supported seller programs.
    """
    
    programs: Optional[List[Program]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programs') }})
    
