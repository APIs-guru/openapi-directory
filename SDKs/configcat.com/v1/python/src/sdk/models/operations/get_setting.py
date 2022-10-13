from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingPathParams:
    setting_id: int = field(default=None, metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingRequest:
    path_params: GetSettingPathParams = field(default=None)
    

@dataclass
class GetSettingResponse:
    content_type: str = field(default=None)
    setting_model: Optional[shared.SettingModel] = field(default=None)
    setting_model_haljson: Optional[shared.SettingModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
