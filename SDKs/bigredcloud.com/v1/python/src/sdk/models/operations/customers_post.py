from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CustomersPostRequest:
    request: shared.CustomerDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CustomersPostResponse:
    content_type: str = field()
    status_code: int = field()
    customers_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
