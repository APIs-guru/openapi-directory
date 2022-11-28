from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsTagIDPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsTagIDRequest:
    path_params: GetTagsTagIDPathParams = field()
    

@dataclass
class GetTagsTagIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_tags_tag: Optional[shared.APICoreDtoTagsTag] = field(default=None)
    
