from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssuesGetLabelPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesGetLabelRequest:
    path_params: IssuesGetLabelPathParams = field()
    

@dataclass
class IssuesGetLabelResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    label: Optional[shared.Label] = field(default=None)
    
