from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountsGetResponse:
    content_type: str = field(default=None)
    page_result_account_dto_: Optional[shared.PageResultAccountDto] = field(default=None)
    status_code: int = field(default=None)
    
