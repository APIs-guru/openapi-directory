from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Email:
    r"""Email
    Email
    """
    
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    primary: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    verified: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    visibility: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
