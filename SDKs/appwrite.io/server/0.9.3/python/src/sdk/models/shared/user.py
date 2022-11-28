from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    r"""User
    User
    """
    
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_verification: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailVerification') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password_update: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordUpdate') }})
    prefs: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefs') }})
    registration: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
