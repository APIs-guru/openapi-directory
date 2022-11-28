from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessageGroup:
    r"""MessageGroup
    Provides one or more messages that Amazon Lex should send to the user.
    """
    
    message: Message = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    variations: Optional[List[Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variations') }})
    
