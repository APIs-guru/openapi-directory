from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPkgNotificationPostRequest:
    request: shared.AppPkgNotification = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppPkgNotificationPostResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
