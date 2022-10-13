from dataclasses import dataclass, field
from typing import Enum


@dataclass
class UpdateParticipantInSpacePathParams:
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    
class UpdateParticipantInSpaceRequestBodyRoleEnum(str, Enum):
    MODERATOR = "MODERATOR"
    AUTHOR = "AUTHOR"
    PARTICIPANT = "PARTICIPANT"
    READER = "READER"


@dataclass
class UpdateParticipantInSpaceRequestBody:
    role: UpdateParticipantInSpaceRequestBodyRoleEnum = field(default=None, metadata={'form': { 'field_name': 'role' }})
    user_id: str = field(default=None, metadata={'form': { 'field_name': 'userId' }})
    

@dataclass
class UpdateParticipantInSpaceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateParticipantInSpaceRequest:
    path_params: UpdateParticipantInSpacePathParams = field(default=None)
    request: UpdateParticipantInSpaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateParticipantInSpaceSecurity = field(default=None)
    

@dataclass
class UpdateParticipantInSpaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
