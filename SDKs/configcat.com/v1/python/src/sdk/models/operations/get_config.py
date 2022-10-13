from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConfigPathParams:
    config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfigRequest:
    path_params: GetConfigPathParams = field(default=None)
    

@dataclass
class GetConfigResponse:
    config_model: Optional[shared.ConfigModel] = field(default=None)
    config_model_haljson: Optional[shared.ConfigModelHaljson] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
