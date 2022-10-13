from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSettingValuePathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    setting_id: int = field(default=None, metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSettingValueQueryParams:
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSettingValueRequests:
    operations: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    operations1: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    operations2: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    operations3: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateSettingValueRequest:
    path_params: UpdateSettingValuePathParams = field(default=None)
    query_params: UpdateSettingValueQueryParams = field(default=None)
    request: UpdateSettingValueRequests = field(default=None)
    

@dataclass
class UpdateSettingValueResponse:
    content_type: str = field(default=None)
    setting_value_model: Optional[shared.SettingValueModel] = field(default=None)
    setting_value_model_haljson: Optional[shared.SettingValueModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
