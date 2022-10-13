from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountRequest:
    path_params: GetAccountPathParams = field(default=None)
    

@dataclass
class GetAccountResponse:
    account: Optional[shared.Account] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
