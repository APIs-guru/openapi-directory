from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResponseSpecification:
    r"""ResponseSpecification
    Specifies a list of message groups that Amazon Lex uses to respond the user input.
    """
    
    message_groups: List[MessageGroup] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageGroups') }})
    allow_interrupt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInterrupt') }})
    
