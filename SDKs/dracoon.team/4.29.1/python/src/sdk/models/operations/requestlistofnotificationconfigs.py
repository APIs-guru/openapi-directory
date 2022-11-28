from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestListOfNotificationConfigsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestListOfNotificationConfigsRequest:
    headers: RequestListOfNotificationConfigsHeaders = field()
    

@dataclass
class RequestListOfNotificationConfigsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    notification_config_list: Optional[shared.NotificationConfigList] = field(default=None)
    
