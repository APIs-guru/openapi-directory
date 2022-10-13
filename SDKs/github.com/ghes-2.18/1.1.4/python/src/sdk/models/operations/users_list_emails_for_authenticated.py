from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersListEmailsForAuthenticatedQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersListEmailsForAuthenticatedRequest:
    query_params: UsersListEmailsForAuthenticatedQueryParams = field(default=None)
    

@dataclass
class UsersListEmailsForAuthenticatedResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    emails: Optional[List[shared.Email]] = field(default=None)
    
