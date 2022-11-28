from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IssueEventDismissedReview:
    dismissal_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_message') }})
    review_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_id') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    dismissal_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_commit_id') }})
    
