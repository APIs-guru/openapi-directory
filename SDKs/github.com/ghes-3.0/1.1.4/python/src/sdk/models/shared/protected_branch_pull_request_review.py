from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectedBranchPullRequestReviewDismissalRestrictions:
    teams: Optional[List[Team]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    teams_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    users: Optional[List[SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    users_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_url') }})
    

@dataclass_json
@dataclass
class ProtectedBranchPullRequestReview:
    r"""ProtectedBranchPullRequestReview
    Protected Branch Pull Request Review
    """
    
    dismiss_stale_reviews: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss_stale_reviews') }})
    require_code_owner_reviews: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_code_owner_reviews') }})
    dismissal_restrictions: Optional[ProtectedBranchPullRequestReviewDismissalRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_restrictions') }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
