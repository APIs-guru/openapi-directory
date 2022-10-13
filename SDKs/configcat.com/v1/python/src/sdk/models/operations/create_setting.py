from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateSettingPathParams:
    config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSettingRequests:
    create_setting_model: Optional[shared.CreateSettingModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_setting_model1: Optional[shared.CreateSettingModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_setting_model2: Optional[shared.CreateSettingModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateSettingRequest:
    path_params: CreateSettingPathParams = field(default=None)
    request: CreateSettingRequests = field(default=None)
    

@dataclass
class CreateSettingResponse:
    content_type: str = field(default=None)
    setting_model: Optional[shared.SettingModel] = field(default=None)
    setting_model_haljson: Optional[shared.SettingModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
