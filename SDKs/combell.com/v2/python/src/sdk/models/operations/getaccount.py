from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountQueryParams:
    account_id: int = field(default=None, metadata={'query_param': { 'field_name': 'account_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountRequest:
    path_params: GetAccountPathParams = field(default=None)
    query_params: GetAccountQueryParams = field(default=None)
    

@dataclass
class GetAccountResponse:
    account_detail: Optional[shared.AccountDetail] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
