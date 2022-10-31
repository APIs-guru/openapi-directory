from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestNotificationChannelsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestNotificationChannelsRequest:
    headers: RequestNotificationChannelsHeaders = field(default=None)
    

@dataclass
class RequestNotificationChannelsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    notification_channel_list: Optional[shared.NotificationChannelList] = field(default=None)
    status_code: int = field(default=None)
    
