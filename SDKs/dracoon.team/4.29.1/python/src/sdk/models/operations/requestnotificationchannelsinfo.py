from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestNotificationChannelsInfoHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestNotificationChannelsInfoRequest:
    headers: RequestNotificationChannelsInfoHeaders = field()
    

@dataclass
class RequestNotificationChannelsInfoResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    notification_channel_list: Optional[shared.NotificationChannelList] = field(default=None)
    
