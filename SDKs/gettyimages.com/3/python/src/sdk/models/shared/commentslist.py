from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import comment
from . import boardcommentpermissions


@dataclass_json
@dataclass
class CommentsList:
    comments: Optional[List[comment.Comment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    permissions: Optional[boardcommentpermissions.BoardCommentPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
