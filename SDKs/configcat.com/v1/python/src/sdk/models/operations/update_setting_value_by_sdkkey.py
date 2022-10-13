from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSettingValueBySdkkeyPathParams:
    setting_key_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'settingKeyOrId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSettingValueBySdkkeyQueryParams:
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSettingValueBySdkkeyHeaders:
    x_configcat_sdkkey: str = field(default=None, metadata={'header': { 'field_name': 'X-CONFIGCAT-SDKKEY' }})
    

@dataclass
class UpdateSettingValueBySdkkeyRequests:
    operations: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    operations1: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    operations2: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    operations3: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateSettingValueBySdkkeyRequest:
    path_params: UpdateSettingValueBySdkkeyPathParams = field(default=None)
    query_params: UpdateSettingValueBySdkkeyQueryParams = field(default=None)
    headers: UpdateSettingValueBySdkkeyHeaders = field(default=None)
    request: UpdateSettingValueBySdkkeyRequests = field(default=None)
    

@dataclass
class UpdateSettingValueBySdkkeyResponse:
    content_type: str = field(default=None)
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
