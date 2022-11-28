from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1SalesEntriesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1SalesEntriesIDRequest:
    path_params: GetV1SalesEntriesIDPathParams = field()
    

@dataclass
class GetV1SalesEntriesIDResponse:
    content_type: str = field()
    status_code: int = field()
    sales_entry_dto: Optional[shared.SalesEntryDto] = field(default=None)
    
