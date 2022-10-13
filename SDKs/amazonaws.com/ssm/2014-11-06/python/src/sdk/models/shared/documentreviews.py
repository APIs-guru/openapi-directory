from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import documentreviewaction_enum
from . import documentreviewcommentsource


@dataclass_json
@dataclass
class DocumentReviews:
    action: documentreviewaction_enum.DocumentReviewActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    comment: Optional[List[documentreviewcommentsource.DocumentReviewCommentSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    
