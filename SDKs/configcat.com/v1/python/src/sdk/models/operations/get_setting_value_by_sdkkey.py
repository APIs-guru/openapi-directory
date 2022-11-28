from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSettingValueBySdkkeyPathParams:
    setting_key_or_id: str = field(metadata={'path_param': { 'field_name': 'settingKeyOrId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingValueBySdkkeyHeaders:
    x_configcat_sdkkey: str = field(metadata={'header': { 'field_name': 'X-CONFIGCAT-SDKKEY', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingValueBySdkkeyRequest:
    headers: GetSettingValueBySdkkeyHeaders = field()
    path_params: GetSettingValueBySdkkeyPathParams = field()
    

@dataclass
class GetSettingValueBySdkkeyResponse:
    content_type: str = field()
    status_code: int = field()
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    
