from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostUserHerokuKey403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostUserHerokuKeyResponse:
    content_type: str = field()
    status_code: int = field()
    post_user_heroku_key_403_application_json_object: Optional[PostUserHerokuKey403ApplicationJSON] = field(default=None)
    
