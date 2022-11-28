from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetPirateTranslateQueryParams:
    text: str = field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPirateTranslateSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPirateTranslateRequest:
    query_params: GetPirateTranslateQueryParams = field()
    security: GetPirateTranslateSecurity = field()
    

@dataclass
class GetPirateTranslateResponse:
    content_type: str = field()
    status_code: int = field()
    
