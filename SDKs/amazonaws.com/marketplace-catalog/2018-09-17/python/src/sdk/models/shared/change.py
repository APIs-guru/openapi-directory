from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Change:
    r"""Change
    An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.
    """
    
    change_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeType') }})
    details: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    entity: Entity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entity') }})
    change_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeName') }})
    
