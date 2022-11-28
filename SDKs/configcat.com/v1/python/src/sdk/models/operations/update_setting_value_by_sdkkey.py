from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSettingValueBySdkkeyPathParams:
    setting_key_or_id: str = field(metadata={'path_param': { 'field_name': 'settingKeyOrId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSettingValueBySdkkeyQueryParams:
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSettingValueBySdkkeyHeaders:
    x_configcat_sdkkey: str = field(metadata={'header': { 'field_name': 'X-CONFIGCAT-SDKKEY', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSettingValueBySdkkeyRequests:
    operations: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    operations1: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    operations2: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    operations3: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateSettingValueBySdkkeyRequest:
    headers: UpdateSettingValueBySdkkeyHeaders = field()
    path_params: UpdateSettingValueBySdkkeyPathParams = field()
    query_params: UpdateSettingValueBySdkkeyQueryParams = field()
    request: UpdateSettingValueBySdkkeyRequests = field()
    

@dataclass
class UpdateSettingValueBySdkkeyResponse:
    content_type: str = field()
    status_code: int = field()
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    
