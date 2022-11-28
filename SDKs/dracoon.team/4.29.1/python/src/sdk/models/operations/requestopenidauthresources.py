from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestOpenIDAuthResourcesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_auth_resources: Optional[shared.OpenIDAuthResources] = field(default=None)
    
