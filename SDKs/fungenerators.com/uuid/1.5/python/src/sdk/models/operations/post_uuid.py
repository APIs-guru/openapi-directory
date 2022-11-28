from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostUUIDQueryParams:
    uuidstr: str = field(metadata={'query_param': { 'field_name': 'uuidstr', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUUIDSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUUIDRequest:
    query_params: PostUUIDQueryParams = field()
    security: PostUUIDSecurity = field()
    

@dataclass
class PostUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
