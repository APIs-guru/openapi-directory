from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConfigPathParams:
    config_id: str = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfigRequest:
    path_params: GetConfigPathParams = field()
    

@dataclass
class GetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    config_model: Optional[shared.ConfigModel] = field(default=None)
    config_model_haljson: Optional[shared.ConfigModelHaljson] = field(default=None)
    
