from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UsersGetAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    users_get_authenticated_200_application_json_one_of: Optional[Any] = field(default=None)
    
