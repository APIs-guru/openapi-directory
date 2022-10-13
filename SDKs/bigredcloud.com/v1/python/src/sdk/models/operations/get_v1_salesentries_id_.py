from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1SalesEntriesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1SalesEntriesIDRequest:
    path_params: GetV1SalesEntriesIDPathParams = field(default=None)
    

@dataclass
class GetV1SalesEntriesIDResponse:
    content_type: str = field(default=None)
    sales_entry_dto: Optional[shared.SalesEntryDto] = field(default=None)
    status_code: int = field(default=None)
    
