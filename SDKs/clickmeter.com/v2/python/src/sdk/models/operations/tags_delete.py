from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class TagsDeletePathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagsDeleteRequest:
    path_params: TagsDeletePathParams = field()
    

@dataclass
class TagsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    system_object: Optional[dict[str, Any]] = field(default=None)
    
