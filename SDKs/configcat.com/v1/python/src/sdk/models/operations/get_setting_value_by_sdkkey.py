from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingValueBySdkkeyPathParams:
    setting_key_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'settingKeyOrId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingValueBySdkkeyHeaders:
    x_configcat_sdkkey: str = field(default=None, metadata={'header': { 'field_name': 'X-CONFIGCAT-SDKKEY', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingValueBySdkkeyRequest:
    path_params: GetSettingValueBySdkkeyPathParams = field(default=None)
    headers: GetSettingValueBySdkkeyHeaders = field(default=None)
    

@dataclass
class GetSettingValueBySdkkeyResponse:
    content_type: str = field(default=None)
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
