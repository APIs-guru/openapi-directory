from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class AddParticipantsToSpacePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AddParticipantsToSpaceRequestBodyRoleEnum(str, Enum):
    DEFAULT = "DEFAULT"
    MODERATOR = "MODERATOR"
    AUTHOR = "AUTHOR"
    PARTICIPANT = "PARTICIPANT"
    READER = "READER"


@dataclass
class AddParticipantsToSpaceRequestBody:
    role: AddParticipantsToSpaceRequestBodyRoleEnum = field(default=None, metadata={'form': { 'field_name': 'role' }})
    user_id: List[str] = field(default=None, metadata={'form': { 'field_name': 'userId' }})
    

@dataclass
class AddParticipantsToSpaceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddParticipantsToSpaceRequest:
    path_params: AddParticipantsToSpacePathParams = field(default=None)
    request: AddParticipantsToSpaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddParticipantsToSpaceSecurity = field(default=None)
    

@dataclass
class AddParticipantsToSpaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    participant_add_results: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
