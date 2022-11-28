from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposListDeployKeysPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListDeployKeysQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListDeployKeysRequest:
    path_params: ReposListDeployKeysPathParams = field()
    query_params: ReposListDeployKeysQueryParams = field()
    

@dataclass
class ReposListDeployKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    deploy_keys: Optional[List[shared.DeployKey]] = field(default=None)
    
