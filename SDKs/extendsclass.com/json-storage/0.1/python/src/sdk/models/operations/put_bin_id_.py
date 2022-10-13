from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutBinIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutBinIDRequest:
    path_params: PutBinIDPathParams = field(default=None)
    

@dataclass
class PutBinIDResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_status: Optional[Any] = field(default=None)
    
