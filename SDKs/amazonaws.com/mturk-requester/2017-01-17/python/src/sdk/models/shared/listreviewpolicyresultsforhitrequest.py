from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reviewpolicylevel_enum


@dataclass_json
@dataclass
class ListReviewPolicyResultsForHitRequest:
    hit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    policy_levels: Optional[List[reviewpolicylevel_enum.ReviewPolicyLevelEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyLevels' }})
    retrieve_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetrieveActions' }})
    retrieve_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetrieveResults' }})
    
