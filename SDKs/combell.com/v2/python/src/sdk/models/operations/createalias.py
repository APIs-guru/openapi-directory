from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateAliasPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAliasQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateAliasRequest:
    path_params: CreateAliasPathParams = field()
    query_params: CreateAliasQueryParams = field()
    request: Optional[shared.CreateAliasRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAliasResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    
