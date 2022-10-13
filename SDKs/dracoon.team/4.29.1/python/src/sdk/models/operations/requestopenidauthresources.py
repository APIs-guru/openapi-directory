from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestOpenIDAuthResourcesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_auth_resources: Optional[shared.OpenIDAuthResources] = field(default=None)
    status_code: int = field(default=None)
    
