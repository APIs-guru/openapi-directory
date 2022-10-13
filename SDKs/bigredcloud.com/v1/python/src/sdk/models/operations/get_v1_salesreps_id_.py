from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1SalesRepsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1SalesRepsIDRequest:
    path_params: GetV1SalesRepsIDPathParams = field(default=None)
    

@dataclass
class GetV1SalesRepsIDResponse:
    content_type: str = field(default=None)
    sale_reps_dto: Optional[shared.SaleRepsDto] = field(default=None)
    status_code: int = field(default=None)
    
