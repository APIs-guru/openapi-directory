from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsIDRequest:
    path_params: GetDomainsIDPathParams = field()
    

@dataclass
class GetDomainsIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_domains_domain: Optional[shared.APICoreDtoDomainsDomain] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
