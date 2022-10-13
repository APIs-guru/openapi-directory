from dataclasses import dataclass, field
from typing import List


@dataclass
class RemoveModeratorsPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveModeratorsRequestBody:
    moderators: List[str] = field(default=None, metadata={'form': { 'field_name': 'moderators' }})
    

@dataclass
class RemoveModeratorsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveModeratorsRequest:
    path_params: RemoveModeratorsPathParams = field(default=None)
    request: RemoveModeratorsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: RemoveModeratorsSecurity = field(default=None)
    

@dataclass
class RemoveModeratorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
