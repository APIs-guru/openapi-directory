from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateParticipantInSpacePathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    
class UpdateParticipantInSpaceRequestBodyRoleEnum(str, Enum):
    MODERATOR = "MODERATOR"
    AUTHOR = "AUTHOR"
    PARTICIPANT = "PARTICIPANT"
    READER = "READER"


@dataclass
class UpdateParticipantInSpaceRequestBody:
    role: UpdateParticipantInSpaceRequestBodyRoleEnum = field(metadata={'form': { 'field_name': 'role' }})
    user_id: str = field(metadata={'form': { 'field_name': 'userId' }})
    

@dataclass
class UpdateParticipantInSpaceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateParticipantInSpaceRequest:
    path_params: UpdateParticipantInSpacePathParams = field()
    request: UpdateParticipantInSpaceRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateParticipantInSpaceSecurity = field()
    

@dataclass
class UpdateParticipantInSpaceResponse:
    content_type: str = field()
    status_code: int = field()
    
