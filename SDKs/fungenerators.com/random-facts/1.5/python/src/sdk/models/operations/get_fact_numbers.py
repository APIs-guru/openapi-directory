from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetFactNumbersQueryParams:
    number: int = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactNumbersSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactNumbersRequest:
    query_params: GetFactNumbersQueryParams = field()
    security: GetFactNumbersSecurity = field()
    

@dataclass
class GetFactNumbersResponse:
    content_type: str = field()
    status_code: int = field()
    
