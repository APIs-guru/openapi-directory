from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateConfigPathParams:
    config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConfigRequests:
    update_config_request: Optional[shared.UpdateConfigRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_config_request1: Optional[shared.UpdateConfigRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_config_request2: Optional[shared.UpdateConfigRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateConfigRequest:
    path_params: UpdateConfigPathParams = field(default=None)
    request: UpdateConfigRequests = field(default=None)
    

@dataclass
class UpdateConfigResponse:
    config_model: Optional[shared.ConfigModel] = field(default=None)
    config_model_haljson: Optional[shared.ConfigModelHaljson] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
