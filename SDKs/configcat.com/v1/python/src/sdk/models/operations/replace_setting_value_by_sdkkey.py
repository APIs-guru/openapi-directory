from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ReplaceSettingValueBySdkkeyPathParams:
    setting_key_or_id: str = field(metadata={'path_param': { 'field_name': 'settingKeyOrId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplaceSettingValueBySdkkeyQueryParams:
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclass
class ReplaceSettingValueBySdkkeyHeaders:
    x_configcat_sdkkey: str = field(metadata={'header': { 'field_name': 'X-CONFIGCAT-SDKKEY', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplaceSettingValueBySdkkeyRequests:
    update_setting_value_model: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_setting_value_model1: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_setting_value_model2: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReplaceSettingValueBySdkkeyRequest:
    headers: ReplaceSettingValueBySdkkeyHeaders = field()
    path_params: ReplaceSettingValueBySdkkeyPathParams = field()
    query_params: ReplaceSettingValueBySdkkeyQueryParams = field()
    request: ReplaceSettingValueBySdkkeyRequests = field()
    

@dataclass
class ReplaceSettingValueBySdkkeyResponse:
    content_type: str = field()
    status_code: int = field()
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    
