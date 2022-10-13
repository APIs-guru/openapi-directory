from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timestamp


@dataclass_json
@dataclass
class ReviewReplyResult:
    last_edited: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEdited' }})
    reply_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyText' }})
    
