from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListPersonalAccessTokensQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListPersonalAccessTokensRequest:
    query_params: EnterpriseAdminListPersonalAccessTokensQueryParams = field()
    

@dataclass
class EnterpriseAdminListPersonalAccessTokensResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    authorizations: Optional[List[shared.Authorization]] = field(default=None)
    
