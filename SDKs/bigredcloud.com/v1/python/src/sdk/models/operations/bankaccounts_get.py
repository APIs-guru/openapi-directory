from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BankAccountsGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_bank_account_query_dto_: Optional[shared.PageResultBankAccountQueryDto] = field(default=None)
    
