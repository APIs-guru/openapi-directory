from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Parent:
    r"""Parent
    Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_root: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRoot') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
