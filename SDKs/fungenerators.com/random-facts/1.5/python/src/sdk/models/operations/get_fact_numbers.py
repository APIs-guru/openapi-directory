from dataclasses import dataclass, field



@dataclass
class GetFactNumbersQueryParams:
    number: int = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactNumbersSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactNumbersRequest:
    query_params: GetFactNumbersQueryParams = field(default=None)
    security: GetFactNumbersSecurity = field(default=None)
    

@dataclass
class GetFactNumbersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
