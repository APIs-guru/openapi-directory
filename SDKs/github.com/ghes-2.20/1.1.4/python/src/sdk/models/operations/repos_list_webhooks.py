from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposListWebhooksPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListWebhooksQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListWebhooksRequest:
    path_params: ReposListWebhooksPathParams = field()
    query_params: ReposListWebhooksQueryParams = field()
    

@dataclass
class ReposListWebhooksResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    hooks: Optional[List[shared.Hook]] = field(default=None)
    
