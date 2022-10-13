from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateAliasPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAliasQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateAliasRequest:
    path_params: CreateAliasPathParams = field(default=None)
    query_params: CreateAliasQueryParams = field(default=None)
    request: Optional[shared.CreateAliasRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAliasResponse:
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
