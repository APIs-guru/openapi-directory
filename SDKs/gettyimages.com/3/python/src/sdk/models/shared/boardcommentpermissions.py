from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BoardCommentPermissions:
    can_add_comment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_add_comment' }})
    
