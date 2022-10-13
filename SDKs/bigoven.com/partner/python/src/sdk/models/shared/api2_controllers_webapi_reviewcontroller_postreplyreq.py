from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ControllersWebAPIReviewControllerPostReplyReq:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }, 'form': { 'field_name': 'Comment' }})
    
