from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReplaceSettingValueBySdkkeyPathParams:
    setting_key_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'settingKeyOrId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplaceSettingValueBySdkkeyQueryParams:
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclass
class ReplaceSettingValueBySdkkeyHeaders:
    x_configcat_sdkkey: str = field(default=None, metadata={'header': { 'field_name': 'X-CONFIGCAT-SDKKEY', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplaceSettingValueBySdkkeyRequests:
    update_setting_value_model: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_setting_value_model1: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_setting_value_model2: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReplaceSettingValueBySdkkeyRequest:
    path_params: ReplaceSettingValueBySdkkeyPathParams = field(default=None)
    query_params: ReplaceSettingValueBySdkkeyQueryParams = field(default=None)
    headers: ReplaceSettingValueBySdkkeyHeaders = field(default=None)
    request: ReplaceSettingValueBySdkkeyRequests = field(default=None)
    

@dataclass
class ReplaceSettingValueBySdkkeyResponse:
    content_type: str = field(default=None)
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
