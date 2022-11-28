from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class RemoveModeratorsPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveModeratorsRequestBody:
    moderators: List[str] = field(metadata={'form': { 'field_name': 'moderators' }})
    

@dataclass
class RemoveModeratorsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveModeratorsRequest:
    path_params: RemoveModeratorsPathParams = field()
    request: RemoveModeratorsRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: RemoveModeratorsSecurity = field()
    

@dataclass
class RemoveModeratorsResponse:
    content_type: str = field()
    status_code: int = field()
    
