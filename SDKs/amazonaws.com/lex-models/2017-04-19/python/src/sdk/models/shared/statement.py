from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Statement:
    r"""Statement
    A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
    """
    
    messages: List[Message] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    
