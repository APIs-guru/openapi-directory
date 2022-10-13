from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PurchasesPostRequest:
    request: shared.PurchaseDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PurchasesPostResponse:
    content_type: str = field(default=None)
    purchases_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
