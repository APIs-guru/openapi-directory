from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CrmCheckPathParams:
    vin: str = field(default=None, metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclass
class CrmCheckQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    sale_date: str = field(default=None, metadata={'query_param': { 'field_name': 'sale_date', 'style': 'form', 'explode': True }})
    

@dataclass
class CrmCheckRequest:
    path_params: CrmCheckPathParams = field(default=None)
    query_params: CrmCheckQueryParams = field(default=None)
    

@dataclass
class CrmCheckResponse:
    crm_response: Optional[shared.CrmResponse] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
