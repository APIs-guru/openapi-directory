from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class AddModeratorsPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddModeratorsRequestBody:
    moderators: List[str] = field(metadata={'form': { 'field_name': 'moderators' }})
    

@dataclass
class AddModeratorsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddModeratorsRequest:
    path_params: AddModeratorsPathParams = field()
    request: AddModeratorsRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddModeratorsSecurity = field()
    

@dataclass
class AddModeratorsResponse:
    content_type: str = field()
    status_code: int = field()
    
