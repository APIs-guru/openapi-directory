from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingPathParams:
    setting_id: int = field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingRequest:
    path_params: GetSettingPathParams = field()
    

@dataclass
class GetSettingResponse:
    content_type: str = field()
    status_code: int = field()
    setting_model: Optional[shared.SettingModel] = field(default=None)
    setting_model_haljson: Optional[shared.SettingModelHaljson] = field(default=None)
    
