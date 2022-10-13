from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostSessionForgotPasswordJSONRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSessionForgotPasswordJSONResponse:
    content_type: str = field(default=None)
    post_session_forgot_password_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
