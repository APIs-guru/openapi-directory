from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPkgNotificationPostRequest:
    request: shared.AppPkgNotification = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppPkgNotificationPostResponse:
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
