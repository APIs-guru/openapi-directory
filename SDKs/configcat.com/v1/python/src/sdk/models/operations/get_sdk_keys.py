from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSDKKeysPathParams:
    config_id: str = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSDKKeysRequest:
    path_params: GetSDKKeysPathParams = field()
    

@dataclass
class GetSDKKeysResponse:
    content_type: str = field()
    status_code: int = field()
    sdk_keys_model: Optional[shared.SDKKeysModel] = field(default=None)
    
