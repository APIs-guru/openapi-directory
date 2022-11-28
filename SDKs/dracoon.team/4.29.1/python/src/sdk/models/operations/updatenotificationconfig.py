from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateNotificationConfigPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNotificationConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNotificationConfigRequest:
    headers: UpdateNotificationConfigHeaders = field()
    path_params: UpdateNotificationConfigPathParams = field()
    request: shared.NotificationConfigChangeRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNotificationConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    notification_config: Optional[shared.NotificationConfig] = field(default=None)
    
