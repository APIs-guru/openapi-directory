from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReviewReplyResult:
    r"""ReviewReplyResult
    The result of replying/updating a reply to review.
    """
    
    last_edited: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEdited') }})
    reply_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyText') }})
    
