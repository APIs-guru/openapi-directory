from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetConfigsPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfigsRequest:
    path_params: GetConfigsPathParams = field(default=None)
    

@dataclass
class GetConfigsResponse:
    config_model_haljsons: Optional[List[shared.ConfigModelHaljson]] = field(default=None)
    config_models: Optional[List[shared.ConfigModel]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
