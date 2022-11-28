from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteRiddleQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteRiddleSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRiddleRequest:
    query_params: DeleteRiddleQueryParams = field()
    security: DeleteRiddleSecurity = field()
    

@dataclass
class DeleteRiddleResponse:
    content_type: str = field()
    status_code: int = field()
    
