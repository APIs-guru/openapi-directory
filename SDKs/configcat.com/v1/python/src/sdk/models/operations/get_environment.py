from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEnvironmentPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnvironmentRequest:
    path_params: GetEnvironmentPathParams = field()
    

@dataclass
class GetEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    environment_model: Optional[shared.EnvironmentModel] = field(default=None)
    environment_model_haljson: Optional[shared.EnvironmentModelHaljson] = field(default=None)
    
