from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTagPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTagRequests:
    create_tag_model: Optional[shared.CreateTagModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_tag_model1: Optional[shared.CreateTagModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_tag_model2: Optional[shared.CreateTagModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateTagRequest:
    path_params: CreateTagPathParams = field(default=None)
    request: CreateTagRequests = field(default=None)
    

@dataclass
class CreateTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_model: Optional[shared.TagModel] = field(default=None)
    tag_model_haljson: Optional[shared.TagModelHaljson] = field(default=None)
    
