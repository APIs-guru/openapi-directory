from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import comment


@dataclass_json
@dataclass
class Review:
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorName' }})
    comments: Optional[List[comment.Comment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    review_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewId' }})
    
