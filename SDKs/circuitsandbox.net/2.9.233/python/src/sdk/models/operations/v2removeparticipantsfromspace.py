from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class V2RemoveParticipantsFromSpacePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class V2RemoveParticipantsFromSpaceRequestBody:
    user_ids: List[str] = field(metadata={'form': { 'field_name': 'userIds' }})
    

@dataclass
class V2RemoveParticipantsFromSpaceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2RemoveParticipantsFromSpaceRequest:
    path_params: V2RemoveParticipantsFromSpacePathParams = field()
    request: V2RemoveParticipantsFromSpaceRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: V2RemoveParticipantsFromSpaceSecurity = field()
    

@dataclass
class V2RemoveParticipantsFromSpaceResponse:
    content_type: str = field()
    status_code: int = field()
    
