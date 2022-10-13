from dataclasses import dataclass, field
from typing import List


@dataclass
class V2RemoveParticipantsFromSpacePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class V2RemoveParticipantsFromSpaceRequestBody:
    user_ids: List[str] = field(default=None, metadata={'form': { 'field_name': 'userIds' }})
    

@dataclass
class V2RemoveParticipantsFromSpaceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2RemoveParticipantsFromSpaceRequest:
    path_params: V2RemoveParticipantsFromSpacePathParams = field(default=None)
    request: V2RemoveParticipantsFromSpaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: V2RemoveParticipantsFromSpaceSecurity = field(default=None)
    

@dataclass
class V2RemoveParticipantsFromSpaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
