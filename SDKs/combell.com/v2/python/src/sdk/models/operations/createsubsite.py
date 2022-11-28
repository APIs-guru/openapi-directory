from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateSubsitePathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSubsiteQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateSubsiteRequest:
    path_params: CreateSubsitePathParams = field()
    query_params: CreateSubsiteQueryParams = field()
    request: Optional[shared.AddSubsiteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSubsiteResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
