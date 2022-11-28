from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TariffcomponentsQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    kwha: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'kwha', 'style': 'form', 'explode': True }})
    milliseconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'milliseconds', 'style': 'form', 'explode': True }})
    wh: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'wh', 'style': 'form', 'explode': True }})
    zipcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zipcode', 'style': 'form', 'explode': True }})
    

@dataclass
class TariffcomponentsRequest:
    query_params: TariffcomponentsQueryParams = field()
    

@dataclass
class TariffcomponentsResponse:
    content_type: str = field()
    status_code: int = field()
    componentsh0: Optional[shared.Componentsh0] = field(default=None)
    
