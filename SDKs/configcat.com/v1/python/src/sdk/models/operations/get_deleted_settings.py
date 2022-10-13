from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDeletedSettingsPathParams:
    config_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeletedSettingsRequest:
    path_params: GetDeletedSettingsPathParams = field(default=None)
    

@dataclass
class GetDeletedSettingsResponse:
    content_type: str = field(default=None)
    setting_model_haljsons: Optional[List[shared.SettingModelHaljson]] = field(default=None)
    setting_models: Optional[List[shared.SettingModel]] = field(default=None)
    status_code: int = field(default=None)
    
