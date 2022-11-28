from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateUserResponse:
    r"""CreateUserResponse
    The object that's returned when a user record is created.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guid') }})
    
