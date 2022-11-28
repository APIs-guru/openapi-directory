from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Prompt:
    r"""Prompt
    Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
    """
    
    max_attempts: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAttempts') }})
    messages: List[Message] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    
