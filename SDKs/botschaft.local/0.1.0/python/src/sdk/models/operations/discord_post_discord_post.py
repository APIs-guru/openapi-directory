from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DiscordPostDiscordPostHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscordPostDiscordPostRequest:
    headers: DiscordPostDiscordPostHeaders = field()
    request: shared.DiscordMessageRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscordPostDiscordPostResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    discord_post_discord_post_200_application_json_any: Optional[Any] = field(default=None)
    
