from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UsersUpdateAuthenticatedRequestBody:
    bio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    blog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    hireable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hireable') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    twitter_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter_username') }})
    

@dataclass
class UsersUpdateAuthenticatedRequest:
    request: Optional[UsersUpdateAuthenticatedRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersUpdateAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    private_user: Optional[shared.PrivateUser] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
