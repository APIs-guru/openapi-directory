from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAPIV1DonationsCryptoCalculateCurrencyEnum(str, Enum):
    ETH = "eth"
    BTC = "btc"


@dataclass
class GetAPIV1DonationsCryptoCalculateQueryParams:
    count: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    currency: GetAPIV1DonationsCryptoCalculateCurrencyEnum = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsCryptoCalculateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsCryptoCalculateRequest:
    query_params: GetAPIV1DonationsCryptoCalculateQueryParams = field(default=None)
    security: GetAPIV1DonationsCryptoCalculateSecurity = field(default=None)
    

@dataclass
class GetAPIV1DonationsCryptoCalculateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
