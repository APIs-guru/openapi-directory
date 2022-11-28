from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateProjectResult:
    r"""UpdateProjectResult
     Result structure used for requests to updated project configuration. 
    """
    
    details: Optional[ProjectDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
