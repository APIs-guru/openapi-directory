from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import messagecommentreactionentity


@dataclass_json
@dataclass
class MessageCommentEntity:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    reactions: Optional[messagecommentreactionentity.MessageCommentReactionEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reactions' }})
    
