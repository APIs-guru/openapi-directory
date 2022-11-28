from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProjectResult:
    r"""CreateProjectResult
     Result structure used in response to a request to create a project. 
    """
    
    details: Optional[ProjectDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
