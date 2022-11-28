from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorRootCauseService:
    r"""ErrorRootCauseService
    A collection of fields identifying the services in a trace summary error.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    entity_path: Optional[List[ErrorRootCauseEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityPath') }})
    inferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inferred') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Names') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
