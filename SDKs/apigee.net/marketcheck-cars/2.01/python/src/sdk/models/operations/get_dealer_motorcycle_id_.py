from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDealerMotorcycleIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDealerMotorcycleIDQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    provider: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'provider', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDealerMotorcycleIDRequest:
    path_params: GetDealerMotorcycleIDPathParams = field()
    query_params: GetDealerMotorcycleIDQueryParams = field()
    

@dataclass
class GetDealerMotorcycleIDResponse:
    content_type: str = field()
    status_code: int = field()
    dealer: Optional[shared.Dealer] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
