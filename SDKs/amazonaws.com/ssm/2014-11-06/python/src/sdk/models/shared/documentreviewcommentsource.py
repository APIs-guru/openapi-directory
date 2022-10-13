from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import documentreviewcommenttype_enum


@dataclass_json
@dataclass
class DocumentReviewCommentSource:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    type: Optional[documentreviewcommenttype_enum.DocumentReviewCommentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
