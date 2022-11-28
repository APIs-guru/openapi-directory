from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class IssuesListLabelsForMilestonePathParams:
    milestone_number: int = field(metadata={'path_param': { 'field_name': 'milestone_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesListLabelsForMilestoneQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListLabelsForMilestoneRequest:
    path_params: IssuesListLabelsForMilestonePathParams = field()
    query_params: IssuesListLabelsForMilestoneQueryParams = field()
    

@dataclass
class IssuesListLabelsForMilestoneResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    labels: Optional[List[shared.Label]] = field(default=None)
    
