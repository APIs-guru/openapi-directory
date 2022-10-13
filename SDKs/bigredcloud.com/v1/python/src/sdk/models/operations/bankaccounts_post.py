from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BankAccountsPostRequest:
    request: shared.BankAccountDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankAccountsPostResponse:
    bank_accounts_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
