from dataclasses import dataclass, field



@dataclass
class Destiny2GetPublicMilestoneContentPathParams:
    milestone_hash: int = field(default=None, metadata={'path_param': { 'field_name': 'milestoneHash', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetPublicMilestoneContentRequest:
    path_params: Destiny2GetPublicMilestoneContentPathParams = field(default=None)
    

@dataclass
class Destiny2GetPublicMilestoneContentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
