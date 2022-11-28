from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OrgsListWebhooksPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListWebhooksQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListWebhooksRequest:
    path_params: OrgsListWebhooksPathParams = field()
    query_params: OrgsListWebhooksQueryParams = field()
    

@dataclass
class OrgsListWebhooksResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_hooks: Optional[List[shared.OrgHook]] = field(default=None)
    
