from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateEnvironmentPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnvironmentRequests:
    update_environment_model: Optional[shared.UpdateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_environment_model1: Optional[shared.UpdateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_environment_model2: Optional[shared.UpdateEnvironmentModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateEnvironmentRequest:
    path_params: UpdateEnvironmentPathParams = field(default=None)
    request: UpdateEnvironmentRequests = field(default=None)
    

@dataclass
class UpdateEnvironmentResponse:
    content_type: str = field(default=None)
    environment_model: Optional[shared.EnvironmentModel] = field(default=None)
    environment_model_haljson: Optional[shared.EnvironmentModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
