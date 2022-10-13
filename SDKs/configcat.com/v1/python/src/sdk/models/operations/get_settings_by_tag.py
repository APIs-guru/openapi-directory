from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSettingsByTagPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsByTagRequest:
    path_params: GetSettingsByTagPathParams = field(default=None)
    

@dataclass
class GetSettingsByTagResponse:
    content_type: str = field(default=None)
    setting_model_haljsons: Optional[List[shared.SettingModelHaljson]] = field(default=None)
    setting_models: Optional[List[shared.SettingModel]] = field(default=None)
    status_code: int = field(default=None)
    
