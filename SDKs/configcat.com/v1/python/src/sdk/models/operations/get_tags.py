from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTagsPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsRequest:
    path_params: GetTagsPathParams = field()
    

@dataclass
class GetTagsResponse:
    content_type: str = field()
    status_code: int = field()
    tag_model_haljsons: Optional[List[shared.TagModelHaljson]] = field(default=None)
    tag_models: Optional[List[shared.TagModel]] = field(default=None)
    
