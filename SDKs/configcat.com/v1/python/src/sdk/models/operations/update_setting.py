from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSettingPathParams:
    setting_id: int = field(default=None, metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSettingRequests:
    operations: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    operations1: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    operations2: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    operations3: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateSettingRequest:
    path_params: UpdateSettingPathParams = field(default=None)
    request: UpdateSettingRequests = field(default=None)
    

@dataclass
class UpdateSettingResponse:
    content_type: str = field(default=None)
    setting_model: Optional[shared.SettingModel] = field(default=None)
    setting_model_haljson: Optional[shared.SettingModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
