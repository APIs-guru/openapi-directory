from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetCheckForUpdateQueryParams:
    is_testflight: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'is_testflight', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCheckForUpdateRequest:
    query_params: GetCheckForUpdateQueryParams = field()
    

@dataclass
class GetCheckForUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
