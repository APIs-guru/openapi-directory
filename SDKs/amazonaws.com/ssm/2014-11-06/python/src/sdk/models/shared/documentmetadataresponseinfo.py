from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentreviewerresponsesource


@dataclass_json
@dataclass
class DocumentMetadataResponseInfo:
    reviewer_response: Optional[List[documentreviewerresponsesource.DocumentReviewerResponseSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewerResponse' }})
    
