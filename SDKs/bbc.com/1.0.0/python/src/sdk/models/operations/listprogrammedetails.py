from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListProgrammeDetailsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_pid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    pid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListProgrammeDetailsRequest:
    query_params: ListProgrammeDetailsQueryParams = field()
    

@dataclass
class ListProgrammeDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
