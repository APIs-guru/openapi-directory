from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingValuesPathParams:
    config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingValuesRequest:
    path_params: GetSettingValuesPathParams = field(default=None)
    

@dataclass
class GetSettingValuesResponse:
    config_setting_values_model: Optional[shared.ConfigSettingValuesModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
