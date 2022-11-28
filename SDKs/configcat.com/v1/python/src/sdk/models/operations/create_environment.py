from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateEnvironmentPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEnvironmentRequests:
    create_environment_model: Optional[shared.CreateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_environment_model1: Optional[shared.CreateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_environment_model2: Optional[shared.CreateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateEnvironmentRequest:
    path_params: CreateEnvironmentPathParams = field()
    request: CreateEnvironmentRequests = field()
    

@dataclass
class CreateEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    environment_model: Optional[shared.EnvironmentModel] = field(default=None)
    environment_model_haljson: Optional[shared.EnvironmentModelHaljson] = field(default=None)
    
