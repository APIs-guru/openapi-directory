from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagRequest:
    path_params: GetTagPathParams = field(default=None)
    

@dataclass
class GetTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_model: Optional[shared.TagModel] = field(default=None)
    tag_model_haljson: Optional[shared.TagModelHaljson] = field(default=None)
    
