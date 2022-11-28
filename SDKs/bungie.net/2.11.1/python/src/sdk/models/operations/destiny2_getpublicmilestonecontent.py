from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetPublicMilestoneContentPathParams:
    milestone_hash: int = field(metadata={'path_param': { 'field_name': 'milestoneHash', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetPublicMilestoneContentRequest:
    path_params: Destiny2GetPublicMilestoneContentPathParams = field()
    

@dataclass
class Destiny2GetPublicMilestoneContentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
