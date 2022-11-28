from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Comment:
    r"""Comment
    An entry of conversation between user and developer.
    """
    
    developer_comment: Optional[DeveloperComment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerComment') }})
    user_comment: Optional[UserComment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userComment') }})
    
