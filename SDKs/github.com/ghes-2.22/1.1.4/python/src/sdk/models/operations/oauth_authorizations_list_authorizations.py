from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsListAuthorizationsQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OauthAuthorizationsListAuthorizationsRequest:
    query_params: OauthAuthorizationsListAuthorizationsQueryParams = field(default=None)
    

@dataclass
class OauthAuthorizationsListAuthorizationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    authorizations: Optional[List[shared.Authorization]] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
