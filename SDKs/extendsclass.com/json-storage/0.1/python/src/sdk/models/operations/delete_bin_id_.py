from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteBinIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBinIDRequest:
    path_params: DeleteBinIDPathParams = field(default=None)
    

@dataclass
class DeleteBinIDResponse:
    content_type: str = field(default=None)
    delete_status: Optional[Any] = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
