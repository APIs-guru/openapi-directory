from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Contributor:
    r"""Contributor
    A contributor to the attack and their contribution.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
