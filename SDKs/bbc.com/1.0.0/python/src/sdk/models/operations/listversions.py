from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class ListVersionsAvailabilityEnum(str, Enum):
    AVAILABLE = "available"

class ListVersionsEmbargoedEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"
    ONLY = "only"

class ListVersionsPaymentTypeEnum(str, Enum):
    FREE = "free"
    BBCSTORE = "bbcstore"
    USCANSVOD = "uscansvod"


@dataclass
class ListVersionsQueryParams:
    availability: Optional[List[ListVersionsAvailabilityEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    descendants_of: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'descendants_of', 'style': 'form', 'explode': True }})
    embargoed: Optional[ListVersionsEmbargoedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embargoed', 'style': 'form', 'explode': True }})
    media_set: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'media_set', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    payment_type: Optional[List[ListVersionsPaymentTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'payment_type', 'style': 'form', 'explode': True }})
    pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVersionsRequest:
    query_params: ListVersionsQueryParams = field()
    

@dataclass
class ListVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
