from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsListGrantsQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OauthAuthorizationsListGrantsRequest:
    query_params: OauthAuthorizationsListGrantsQueryParams = field(default=None)
    

@dataclass
class OauthAuthorizationsListGrantsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    application_grants: Optional[List[shared.ApplicationGrant]] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
