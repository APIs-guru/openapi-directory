from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSessionsRequestBody:
    otp: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'otp' }})
    partial_session_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'partial_session_id' }})
    password: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclass
class PostSessionsRequest:
    request: Optional[PostSessionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    session_entity: Optional[shared.SessionEntity] = field(default=None)
    
