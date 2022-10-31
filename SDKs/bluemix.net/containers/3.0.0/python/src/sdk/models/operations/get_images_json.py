from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetImagesJSONHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagesJSONRequest:
    headers: GetImagesJSONHeaders = field(default=None)
    

@dataclass
class GetImagesJSONResponse:
    content_type: str = field(default=None)
    image_info: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
