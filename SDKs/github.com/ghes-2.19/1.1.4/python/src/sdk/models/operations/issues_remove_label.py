from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class IssuesRemoveLabelPathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesRemoveLabelRequest:
    path_params: IssuesRemoveLabelPathParams = field()
    

@dataclass
class IssuesRemoveLabelResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    labels: Optional[List[shared.Label]] = field(default=None)
    
