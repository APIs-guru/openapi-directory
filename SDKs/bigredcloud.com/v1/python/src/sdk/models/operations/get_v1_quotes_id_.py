from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1QuotesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1QuotesIDRequest:
    path_params: GetV1QuotesIDPathParams = field(default=None)
    

@dataclass
class GetV1QuotesIDResponse:
    content_type: str = field(default=None)
    quote_dto: Optional[shared.QuoteDto] = field(default=None)
    status_code: int = field(default=None)
    
