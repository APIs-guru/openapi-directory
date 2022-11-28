from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetShakespeareTranslateQueryParams:
    text: str = field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShakespeareTranslateSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareTranslateRequest:
    query_params: GetShakespeareTranslateQueryParams = field()
    security: GetShakespeareTranslateSecurity = field()
    

@dataclass
class GetShakespeareTranslateResponse:
    content_type: str = field()
    status_code: int = field()
    
