from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingValuesPathParams:
    config_id: str = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingValuesRequest:
    path_params: GetSettingValuesPathParams = field()
    

@dataclass
class GetSettingValuesResponse:
    content_type: str = field()
    status_code: int = field()
    config_setting_values_model: Optional[shared.ConfigSettingValuesModel] = field(default=None)
    
