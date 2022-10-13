from dataclasses import dataclass, field



@dataclass
class PostUUIDQueryParams:
    uuidstr: str = field(default=None, metadata={'query_param': { 'field_name': 'uuidstr', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUUIDSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUUIDRequest:
    query_params: PostUUIDQueryParams = field(default=None)
    security: PostUUIDSecurity = field(default=None)
    

@dataclass
class PostUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
