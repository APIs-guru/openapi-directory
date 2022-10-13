from dataclasses import dataclass, field
from typing import List


@dataclass
class AddModeratorsPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddModeratorsRequestBody:
    moderators: List[str] = field(default=None, metadata={'form': { 'field_name': 'moderators' }})
    

@dataclass
class AddModeratorsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddModeratorsRequest:
    path_params: AddModeratorsPathParams = field(default=None)
    request: AddModeratorsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddModeratorsSecurity = field(default=None)
    

@dataclass
class AddModeratorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
