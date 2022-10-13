from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssueEventDismissedReview:
    dismissal_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissal_commit_id' }})
    dismissal_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissal_message' }})
    review_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_id' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
