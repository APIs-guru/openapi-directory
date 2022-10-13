from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSearchJSONRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSearchJSONResponse:
    content_type: str = field(default=None)
    get_search_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
