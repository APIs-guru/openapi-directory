from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import team
from . import simple_user


@dataclass_json
@dataclass
class ProtectedBranchPullRequestReviewDismissalRestrictions:
    teams: Optional[List[team.Team]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    teams_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    users: Optional[List[simple_user.SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    users_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users_url' }})
    

@dataclass_json
@dataclass
class ProtectedBranchPullRequestReview:
    dismiss_stale_reviews: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismiss_stale_reviews' }})
    dismissal_restrictions: Optional[ProtectedBranchPullRequestReviewDismissalRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissal_restrictions' }})
    require_code_owner_reviews: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_code_owner_reviews' }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_approving_review_count' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
