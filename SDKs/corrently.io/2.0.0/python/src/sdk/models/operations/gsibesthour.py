from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GsiBesthourQueryParams:
    hours: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'hours', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    timeframe: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class GsiBesthourRequest:
    query_params: GsiBesthourQueryParams = field()
    

@dataclass
class GsiBesthourResponse:
    content_type: str = field()
    status_code: int = field()
    gsi_besthour_200_application_json_boolean: Optional[bool] = field(default=None)
    
