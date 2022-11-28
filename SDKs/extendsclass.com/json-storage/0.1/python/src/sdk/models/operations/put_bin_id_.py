from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class PutBinIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutBinIDRequest:
    path_params: PutBinIDPathParams = field()
    

@dataclass
class PutBinIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    update_status: Optional[Any] = field(default=None)
    
