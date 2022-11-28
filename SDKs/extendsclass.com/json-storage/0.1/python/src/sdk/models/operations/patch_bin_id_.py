from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class PatchBinIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchBinIDRequest:
    path_params: PatchBinIDPathParams = field()
    

@dataclass
class PatchBinIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    update_status: Optional[Any] = field(default=None)
    
