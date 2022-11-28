from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetEligibleOffersQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEligibleOffersRequest:
    query_params: GetEligibleOffersQueryParams = field()
    request: shared.EeOffersRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEligibleOffersResponse:
    content_type: str = field()
    status_code: int = field()
    ee_offers_response: Optional[shared.EeOffersResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
