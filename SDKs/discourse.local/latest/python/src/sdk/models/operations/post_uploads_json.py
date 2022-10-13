from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostUploadsJSONRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUploadsJSONResponse:
    content_type: str = field(default=None)
    post_uploads_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
