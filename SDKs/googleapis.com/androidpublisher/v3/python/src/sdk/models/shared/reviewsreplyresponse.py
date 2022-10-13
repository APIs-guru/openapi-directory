from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reviewreplyresult


@dataclass_json
@dataclass
class ReviewsReplyResponse:
    result: Optional[reviewreplyresult.ReviewReplyResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
