from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CashReceiptsPostRequest:
    request: shared.CashReceiptDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashReceiptsPostResponse:
    cash_receipts_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
