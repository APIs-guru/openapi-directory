from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesRepPostRequest:
    request: shared.SaleRepsDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesRepPostResponse:
    content_type: str = field(default=None)
    sales_rep_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
