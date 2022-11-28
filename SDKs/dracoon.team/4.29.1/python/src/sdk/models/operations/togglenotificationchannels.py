from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ToggleNotificationChannelsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class ToggleNotificationChannelsRequest:
    headers: ToggleNotificationChannelsHeaders = field()
    request: shared.NotificationChannelActivationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ToggleNotificationChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    notification_channel_list: Optional[shared.NotificationChannelList] = field(default=None)
    
