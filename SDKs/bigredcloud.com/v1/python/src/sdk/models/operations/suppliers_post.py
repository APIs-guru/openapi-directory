from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SuppliersPostRequest:
    request: shared.SupplierDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SuppliersPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    suppliers_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
