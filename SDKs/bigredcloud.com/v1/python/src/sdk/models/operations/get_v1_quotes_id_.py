from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1QuotesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1QuotesIDRequest:
    path_params: GetV1QuotesIDPathParams = field()
    

@dataclass
class GetV1QuotesIDResponse:
    content_type: str = field()
    status_code: int = field()
    quote_dto: Optional[shared.QuoteDto] = field(default=None)
    
