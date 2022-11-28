from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteFactQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteFactSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteFactRequest:
    query_params: DeleteFactQueryParams = field()
    security: DeleteFactSecurity = field()
    

@dataclass
class DeleteFactResponse:
    content_type: str = field()
    status_code: int = field()
    
