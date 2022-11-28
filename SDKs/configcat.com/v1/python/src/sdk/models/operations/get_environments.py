from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEnvironmentsPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnvironmentsRequest:
    path_params: GetEnvironmentsPathParams = field()
    

@dataclass
class GetEnvironmentsResponse:
    content_type: str = field()
    status_code: int = field()
    environment_model_haljsons: Optional[List[shared.EnvironmentModelHaljson]] = field(default=None)
    environment_models: Optional[List[shared.EnvironmentModel]] = field(default=None)
    
