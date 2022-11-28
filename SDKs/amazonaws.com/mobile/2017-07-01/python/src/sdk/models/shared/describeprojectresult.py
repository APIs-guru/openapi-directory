from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeProjectResult:
    r"""DescribeProjectResult
     Result structure used for requests of project details. 
    """
    
    details: Optional[ProjectDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
