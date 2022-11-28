from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Rename:
    r"""Rename
    Contains information about a renametype event.
    """
    
    new_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTitle') }})
    old_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldTitle') }})
    
