from dataclasses import dataclass, field



@dataclass
class GetPirateTranslateQueryParams:
    text: str = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPirateTranslateSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPirateTranslateRequest:
    query_params: GetPirateTranslateQueryParams = field(default=None)
    security: GetPirateTranslateSecurity = field(default=None)
    

@dataclass
class GetPirateTranslateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
