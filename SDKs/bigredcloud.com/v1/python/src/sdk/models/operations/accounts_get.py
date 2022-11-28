from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountsGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_account_dto_: Optional[shared.PageResultAccountDto] = field(default=None)
    
