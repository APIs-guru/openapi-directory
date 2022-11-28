from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class BankAccountsProcessBatchRequest:
    request: List[shared.BatchItemBankAccountDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankAccountsProcessBatchResponse:
    content_type: str = field()
    status_code: int = field()
    bank_accounts_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
