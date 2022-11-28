from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Signin:
    r"""Signin
    Payload of signin object
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    dt: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dt') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
