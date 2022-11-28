from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingValuePathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    setting_id: int = field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingValueRequest:
    path_params: GetSettingValuePathParams = field()
    

@dataclass
class GetSettingValueResponse:
    content_type: str = field()
    status_code: int = field()
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    
