from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DiscordPostDiscordPostHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization' }})
    

@dataclass
class DiscordPostDiscordPostRequest:
    headers: DiscordPostDiscordPostHeaders = field(default=None)
    request: shared.DiscordMessageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscordPostDiscordPostResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    discord_post_discord_post_200_application_json_any: Optional[Any] = field(default=None)
    
