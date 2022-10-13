from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class BankAccountsProcessBatchRequest:
    request: List[shared.BatchItemBankAccountDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankAccountsProcessBatchResponse:
    bank_accounts_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
