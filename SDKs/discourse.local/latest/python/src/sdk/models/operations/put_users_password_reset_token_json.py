from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutUsersPasswordResetTokenJSONPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersPasswordResetTokenJSONRequest:
    path_params: PutUsersPasswordResetTokenJSONPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUsersPasswordResetTokenJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
