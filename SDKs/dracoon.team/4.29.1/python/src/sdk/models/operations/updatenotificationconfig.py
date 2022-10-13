from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateNotificationConfigPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNotificationConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class UpdateNotificationConfigRequest:
    path_params: UpdateNotificationConfigPathParams = field(default=None)
    headers: UpdateNotificationConfigHeaders = field(default=None)
    request: shared.NotificationConfigChangeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNotificationConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    notification_config: Optional[shared.NotificationConfig] = field(default=None)
    status_code: int = field(default=None)
    
