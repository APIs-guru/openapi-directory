from dataclasses import dataclass, field
from typing import Enum,Optional

class PostAPIV1DonationsCreateFundingSourceEnum(str, Enum):
    MERCHANT = "merchant"
    CUSTOMER = "customer"


@dataclass
class PostAPIV1DonationsCreateQueryParams:
    amount: str = field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    funding_source: PostAPIV1DonationsCreateFundingSourceEnum = field(default=None, metadata={'query_param': { 'field_name': 'funding_source', 'style': 'form', 'explode': True }})
    nonprofit_id: str = field(default=None, metadata={'query_param': { 'field_name': 'nonprofit_id', 'style': 'form', 'explode': True }})
    zip_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip_code', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIV1DonationsCreateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostAPIV1DonationsCreateRequest:
    query_params: PostAPIV1DonationsCreateQueryParams = field(default=None)
    security: PostAPIV1DonationsCreateSecurity = field(default=None)
    

@dataclass
class PostAPIV1DonationsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
