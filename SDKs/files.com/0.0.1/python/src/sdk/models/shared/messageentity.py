from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import messagecommententity


@dataclass_json
@dataclass
class MessageEntity:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    comments: Optional[messagecommententity.MessageCommentEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
