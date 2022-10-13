from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSdkKeysPathParams:
    config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSdkKeysRequest:
    path_params: GetSdkKeysPathParams = field(default=None)
    

@dataclass
class GetSdkKeysResponse:
    content_type: str = field(default=None)
    sdk_keys_model: Optional[shared.SdkKeysModel] = field(default=None)
    status_code: int = field(default=None)
    
