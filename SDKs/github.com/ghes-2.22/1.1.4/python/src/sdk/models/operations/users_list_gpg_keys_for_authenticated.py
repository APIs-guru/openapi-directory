from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersListGpgKeysForAuthenticatedQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListGpgKeysForAuthenticatedRequest:
    query_params: UsersListGpgKeysForAuthenticatedQueryParams = field(default=None)
    

@dataclass
class UsersListGpgKeysForAuthenticatedResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    gpg_keys: Optional[List[shared.GpgKey]] = field(default=None)
    
