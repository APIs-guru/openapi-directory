from dataclasses import dataclass, field



@dataclass
class GetShakespeareQuoteSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareQuoteRequest:
    security: GetShakespeareQuoteSecurity = field(default=None)
    

@dataclass
class GetShakespeareQuoteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
