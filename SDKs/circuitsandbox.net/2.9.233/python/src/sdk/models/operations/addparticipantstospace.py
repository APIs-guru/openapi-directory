from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AddParticipantsToSpacePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AddParticipantsToSpaceRequestBodyRoleEnum(str, Enum):
    DEFAULT = "DEFAULT"
    MODERATOR = "MODERATOR"
    AUTHOR = "AUTHOR"
    PARTICIPANT = "PARTICIPANT"
    READER = "READER"


@dataclass
class AddParticipantsToSpaceRequestBody:
    role: AddParticipantsToSpaceRequestBodyRoleEnum = field(metadata={'form': { 'field_name': 'role' }})
    user_id: List[str] = field(metadata={'form': { 'field_name': 'userId' }})
    

@dataclass
class AddParticipantsToSpaceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddParticipantsToSpaceRequest:
    path_params: AddParticipantsToSpacePathParams = field()
    request: AddParticipantsToSpaceRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddParticipantsToSpaceSecurity = field()
    

@dataclass
class AddParticipantsToSpaceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participant_add_results: Optional[List[Any]] = field(default=None)
    
