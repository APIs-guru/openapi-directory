from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawBrandFranchisesPathParams:
    pid: str = field(default=None, metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawBrandFranchisesRequest:
    path_params: GetRawBrandFranchisesPathParams = field(default=None)
    

@dataclass
class GetRawBrandFranchisesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
