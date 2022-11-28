from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Message:
    r"""Message
    The message object that provides the message text and its type.
    """
    
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    content_type: ContentTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    group_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupNumber') }})
    
