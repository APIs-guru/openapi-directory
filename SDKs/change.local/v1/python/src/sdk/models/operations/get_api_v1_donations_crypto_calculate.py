from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetAPIV1DonationsCryptoCalculateCurrencyEnum(str, Enum):
    ETH = "eth"
    BTC = "btc"


@dataclass
class GetAPIV1DonationsCryptoCalculateQueryParams:
    currency: GetAPIV1DonationsCryptoCalculateCurrencyEnum = field(metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    count: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsCryptoCalculateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsCryptoCalculateRequest:
    query_params: GetAPIV1DonationsCryptoCalculateQueryParams = field()
    security: GetAPIV1DonationsCryptoCalculateSecurity = field()
    

@dataclass
class GetAPIV1DonationsCryptoCalculateResponse:
    content_type: str = field()
    status_code: int = field()
    
