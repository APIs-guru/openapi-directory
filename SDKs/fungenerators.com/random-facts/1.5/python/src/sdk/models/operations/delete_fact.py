from dataclasses import dataclass, field



@dataclass
class DeleteFactQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteFactSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteFactRequest:
    query_params: DeleteFactQueryParams = field(default=None)
    security: DeleteFactSecurity = field(default=None)
    

@dataclass
class DeleteFactResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
