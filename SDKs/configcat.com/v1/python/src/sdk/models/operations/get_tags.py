from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTagsPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsRequest:
    path_params: GetTagsPathParams = field(default=None)
    

@dataclass
class GetTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_model_haljsons: Optional[List[shared.TagModelHaljson]] = field(default=None)
    tag_models: Optional[List[shared.TagModel]] = field(default=None)
    
