from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTagPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTagRequests:
    update_tag_model: Optional[shared.UpdateTagModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_tag_model1: Optional[shared.UpdateTagModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_tag_model2: Optional[shared.UpdateTagModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateTagRequest:
    path_params: UpdateTagPathParams = field(default=None)
    request: UpdateTagRequests = field(default=None)
    

@dataclass
class UpdateTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_model: Optional[shared.TagModel] = field(default=None)
    tag_model_haljson: Optional[shared.TagModelHaljson] = field(default=None)
    
