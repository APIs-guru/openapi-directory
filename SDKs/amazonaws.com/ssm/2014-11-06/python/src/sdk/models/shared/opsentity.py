from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpsEntity:
    r"""OpsEntity
    The result of the query.
    """
    
    data: Optional[dict[str, OpsEntityItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
