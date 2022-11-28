from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BadRequestException:
    r"""BadRequestException
     The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. 
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
