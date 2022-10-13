from dataclasses import dataclass, field



@dataclass
class DeleteRiddleQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteRiddleSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRiddleRequest:
    query_params: DeleteRiddleQueryParams = field(default=None)
    security: DeleteRiddleSecurity = field(default=None)
    

@dataclass
class DeleteRiddleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
