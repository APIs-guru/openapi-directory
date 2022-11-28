from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PurchasesPostRequest:
    request: shared.PurchaseDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PurchasesPostResponse:
    content_type: str = field()
    status_code: int = field()
    purchases_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
