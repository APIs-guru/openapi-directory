from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class CrmCheckPathParams:
    vin: str = field(metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclass
class CrmCheckQueryParams:
    sale_date: str = field(metadata={'query_param': { 'field_name': 'sale_date', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class CrmCheckRequest:
    path_params: CrmCheckPathParams = field()
    query_params: CrmCheckQueryParams = field()
    

@dataclass
class CrmCheckResponse:
    content_type: str = field()
    status_code: int = field()
    crm_response: Optional[shared.CrmResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
