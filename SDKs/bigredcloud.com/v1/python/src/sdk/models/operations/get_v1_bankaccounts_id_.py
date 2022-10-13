from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1BankAccountsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1BankAccountsIDRequest:
    path_params: GetV1BankAccountsIDPathParams = field(default=None)
    

@dataclass
class GetV1BankAccountsIDResponse:
    bank_account_dto: Optional[shared.BankAccountDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
