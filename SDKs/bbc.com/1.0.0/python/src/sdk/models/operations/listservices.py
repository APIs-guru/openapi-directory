from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class ListServicesServiceTypeEnum(str, Enum):
    INTERACTIVE = "Interactive"
    LOCAL_RADIO = "Local Radio"
    MASTER_BRAND_ONLY = "Master Brand Only"
    NATIONAL_RADIO = "National Radio"
    ON_DEMAND = "On Demand"
    REGIONAL_RADIO = "Regional Radio"
    SIMULCAST = "Simulcast"
    TV = "TV"
    WEB_ONLY = "Web Only"
    WEBCAST = "Webcast"


@dataclass
class ListServicesQueryParams:
    end_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_from', 'style': 'form', 'explode': True }})
    end_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_to', 'style': 'form', 'explode': True }})
    mid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mid', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    service_type: Optional[List[ListServicesServiceTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'service_type', 'style': 'form', 'explode': True }})
    sid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sid', 'style': 'form', 'explode': True }})
    start_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_from', 'style': 'form', 'explode': True }})
    start_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_to', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServicesRequest:
    query_params: ListServicesQueryParams = field()
    

@dataclass
class ListServicesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
