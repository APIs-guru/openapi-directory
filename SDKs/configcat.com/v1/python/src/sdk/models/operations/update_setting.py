from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSettingPathParams:
    setting_id: int = field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSettingRequests:
    operations: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    operations1: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    operations2: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    operations3: Optional[List[shared.Operation]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateSettingRequest:
    path_params: UpdateSettingPathParams = field()
    request: UpdateSettingRequests = field()
    

@dataclass
class UpdateSettingResponse:
    content_type: str = field()
    status_code: int = field()
    setting_model: Optional[shared.SettingModel] = field(default=None)
    setting_model_haljson: Optional[shared.SettingModelHaljson] = field(default=None)
    
