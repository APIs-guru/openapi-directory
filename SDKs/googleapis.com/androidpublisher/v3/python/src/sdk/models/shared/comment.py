from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import developercomment
from . import usercomment


@dataclass_json
@dataclass
class Comment:
    developer_comment: Optional[developercomment.DeveloperComment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerComment' }})
    user_comment: Optional[usercomment.UserComment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userComment' }})
    
