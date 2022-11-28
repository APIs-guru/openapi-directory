from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposListDeploymentsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListDeploymentsQueryParams:
    environment: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'environment', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    sha: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sha', 'style': 'form', 'explode': True }})
    task: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'task', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListDeploymentsRequest:
    path_params: ReposListDeploymentsPathParams = field()
    query_params: ReposListDeploymentsQueryParams = field()
    

@dataclass
class ReposListDeploymentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    deployments: Optional[List[shared.Deployment]] = field(default=None)
    
