from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNotificationsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNotificationsIDRequest:
    path_params: GetNotificationsIDPathParams = field(default=None)
    

@dataclass
class GetNotificationsIDResponse:
    content_type: str = field(default=None)
    notification_entity: Optional[shared.NotificationEntity] = field(default=None)
    status_code: int = field(default=None)
    
