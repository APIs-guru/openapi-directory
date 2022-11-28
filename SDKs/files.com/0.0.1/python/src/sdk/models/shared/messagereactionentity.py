from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MessageReactionEntity:
    r"""MessageReactionEntity
    List Message Reactions
    """
    
    emoji: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emoji') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
