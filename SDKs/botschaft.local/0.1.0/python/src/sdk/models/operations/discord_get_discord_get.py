from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DiscordGetDiscordGetQueryParams:
    base64_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base64_message', 'style': 'form', 'explode': True }})
    channel: str = field(default=None, metadata={'query_param': { 'field_name': 'channel', 'style': 'form', 'explode': True }})
    message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    

@dataclass
class DiscordGetDiscordGetHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscordGetDiscordGetRequest:
    query_params: DiscordGetDiscordGetQueryParams = field(default=None)
    headers: DiscordGetDiscordGetHeaders = field(default=None)
    

@dataclass
class DiscordGetDiscordGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    discord_get_discord_get_200_application_json_any: Optional[Any] = field(default=None)
    
