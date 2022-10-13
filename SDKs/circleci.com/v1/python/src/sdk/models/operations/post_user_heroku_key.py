from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostUserHerokuKey403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostUserHerokuKeyResponse:
    content_type: str = field(default=None)
    post_user_heroku_key_403_application_json_object: Optional[PostUserHerokuKey403ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
