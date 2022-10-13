from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ScimListProvisionedIdentitiesPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScimListProvisionedIdentitiesQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class ScimListProvisionedIdentitiesRequest:
    path_params: ScimListProvisionedIdentitiesPathParams = field(default=None)
    query_params: ScimListProvisionedIdentitiesQueryParams = field(default=None)
    

@dataclass
class ScimListProvisionedIdentitiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    scim_user_list: Optional[shared.ScimUserList] = field(default=None)
    
