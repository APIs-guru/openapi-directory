from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UsersGetContextForUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class UsersGetContextForUserSubjectTypeEnum(str, Enum):
    ORGANIZATION = "organization"
    REPOSITORY = "repository"
    ISSUE = "issue"
    PULL_REQUEST = "pull_request"


@dataclass
class UsersGetContextForUserQueryParams:
    subject_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subject_id', 'style': 'form', 'explode': True }})
    subject_type: Optional[UsersGetContextForUserSubjectTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'subject_type', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersGetContextForUserRequest:
    path_params: UsersGetContextForUserPathParams = field()
    query_params: UsersGetContextForUserQueryParams = field()
    

@dataclass
class UsersGetContextForUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    hovercard: Optional[shared.Hovercard] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
