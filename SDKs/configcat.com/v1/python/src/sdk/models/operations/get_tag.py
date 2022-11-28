from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagRequest:
    path_params: GetTagPathParams = field()
    

@dataclass
class GetTagResponse:
    content_type: str = field()
    status_code: int = field()
    tag_model: Optional[shared.TagModel] = field(default=None)
    tag_model_haljson: Optional[shared.TagModelHaljson] = field(default=None)
    
