from dataclasses import dataclass, field



@dataclass
class GetShakespeareTranslateQueryParams:
    text: str = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShakespeareTranslateSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetShakespeareTranslateRequest:
    query_params: GetShakespeareTranslateQueryParams = field(default=None)
    security: GetShakespeareTranslateSecurity = field(default=None)
    

@dataclass
class GetShakespeareTranslateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
