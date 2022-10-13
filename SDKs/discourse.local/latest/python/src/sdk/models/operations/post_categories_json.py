from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostCategoriesJSONRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCategoriesJSONResponse:
    content_type: str = field(default=None)
    post_categories_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
