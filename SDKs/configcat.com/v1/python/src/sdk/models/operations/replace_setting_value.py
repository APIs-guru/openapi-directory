from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ReplaceSettingValuePathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    setting_id: int = field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplaceSettingValueQueryParams:
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclass
class ReplaceSettingValueRequests:
    update_setting_value_model: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_setting_value_model1: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_setting_value_model2: Optional[shared.UpdateSettingValueModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReplaceSettingValueRequest:
    path_params: ReplaceSettingValuePathParams = field()
    query_params: ReplaceSettingValueQueryParams = field()
    request: ReplaceSettingValueRequests = field()
    

@dataclass
class ReplaceSettingValueResponse:
    content_type: str = field()
    status_code: int = field()
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    
