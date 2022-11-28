from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class PostAPIV1DonationsCreateFundingSourceEnum(str, Enum):
    MERCHANT = "merchant"
    CUSTOMER = "customer"


@dataclass
class PostAPIV1DonationsCreateQueryParams:
    amount: str = field(metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    funding_source: PostAPIV1DonationsCreateFundingSourceEnum = field(metadata={'query_param': { 'field_name': 'funding_source', 'style': 'form', 'explode': True }})
    nonprofit_id: str = field(metadata={'query_param': { 'field_name': 'nonprofit_id', 'style': 'form', 'explode': True }})
    zip_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip_code', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIV1DonationsCreateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostAPIV1DonationsCreateRequest:
    query_params: PostAPIV1DonationsCreateQueryParams = field()
    security: PostAPIV1DonationsCreateSecurity = field()
    

@dataclass
class PostAPIV1DonationsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
