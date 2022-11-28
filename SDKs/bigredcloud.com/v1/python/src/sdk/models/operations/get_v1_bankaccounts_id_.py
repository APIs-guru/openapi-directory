from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1BankAccountsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1BankAccountsIDRequest:
    path_params: GetV1BankAccountsIDPathParams = field()
    

@dataclass
class GetV1BankAccountsIDResponse:
    content_type: str = field()
    status_code: int = field()
    bank_account_dto: Optional[shared.BankAccountDto] = field(default=None)
    
