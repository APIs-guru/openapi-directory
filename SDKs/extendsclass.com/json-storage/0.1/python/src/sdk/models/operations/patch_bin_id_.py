from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PatchBinIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchBinIDRequest:
    path_params: PatchBinIDPathParams = field(default=None)
    

@dataclass
class PatchBinIDResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_status: Optional[Any] = field(default=None)
    
