from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SlackPostSlackPostHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class SlackPostSlackPostRequest:
    headers: SlackPostSlackPostHeaders = field(default=None)
    request: shared.SlackMessageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SlackPostSlackPostResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    slack_post_slack_post_200_application_json_any: Optional[Any] = field(default=None)
    
