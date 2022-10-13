from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListPeopleHasExternalIDEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass
class ListPeopleQueryParams:
    authority: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authority', 'style': 'form', 'explode': True }})
    has_external_id: Optional[List[ListPeopleHasExternalIDEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'has_external_id', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id_type', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    programme: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'programme', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPeopleRequest:
    query_params: ListPeopleQueryParams = field(default=None)
    

@dataclass
class ListPeopleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
