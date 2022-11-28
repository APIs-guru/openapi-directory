from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountQueryParams:
    account_id: int = field(metadata={'query_param': { 'field_name': 'account_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountRequest:
    path_params: GetAccountPathParams = field()
    query_params: GetAccountQueryParams = field()
    

@dataclass
class GetAccountResponse:
    content_type: str = field()
    status_code: int = field()
    account_detail: Optional[shared.AccountDetail] = field(default=None)
    
