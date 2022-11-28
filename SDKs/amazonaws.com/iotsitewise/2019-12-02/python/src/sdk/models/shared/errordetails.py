from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorDetails:
    r"""ErrorDetails
    Contains the details of an IoT SiteWise error.
    """
    
    code: ErrorCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    details: Optional[List[DetailedError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
