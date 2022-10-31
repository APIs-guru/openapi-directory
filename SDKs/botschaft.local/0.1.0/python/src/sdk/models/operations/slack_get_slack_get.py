from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SlackGetSlackGetQueryParams:
    base64_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base64_message', 'style': 'form', 'explode': True }})
    channel: str = field(default=None, metadata={'query_param': { 'field_name': 'channel', 'style': 'form', 'explode': True }})
    message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    

@dataclass
class SlackGetSlackGetHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class SlackGetSlackGetRequest:
    query_params: SlackGetSlackGetQueryParams = field(default=None)
    headers: SlackGetSlackGetHeaders = field(default=None)
    

@dataclass
class SlackGetSlackGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    slack_get_slack_get_200_application_json_any: Optional[Any] = field(default=None)
    
