from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CashReceiptsPostRequest:
    request: shared.CashReceiptDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashReceiptsPostResponse:
    content_type: str = field()
    status_code: int = field()
    cash_receipts_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
