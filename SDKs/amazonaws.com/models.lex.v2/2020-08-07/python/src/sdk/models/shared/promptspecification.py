from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PromptSpecification:
    r"""PromptSpecification
    Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
    """
    
    max_retries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    message_groups: List[MessageGroup] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageGroups') }})
    allow_interrupt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInterrupt') }})
    
