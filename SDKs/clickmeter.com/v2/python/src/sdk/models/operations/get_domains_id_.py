from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsIDRequest:
    path_params: GetDomainsIDPathParams = field(default=None)
    

@dataclass
class GetDomainsIDResponse:
    api_core_dto_domains_domain: Optional[shared.APICoreDtoDomainsDomain] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
