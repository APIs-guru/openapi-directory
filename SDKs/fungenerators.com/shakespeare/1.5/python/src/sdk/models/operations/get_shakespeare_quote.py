from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetShakespeareQuoteSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareQuoteRequest:
    security: GetShakespeareQuoteSecurity = field()
    

@dataclass
class GetShakespeareQuoteResponse:
    content_type: str = field()
    status_code: int = field()
    
