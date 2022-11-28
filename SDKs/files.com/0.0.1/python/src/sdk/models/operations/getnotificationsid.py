from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNotificationsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNotificationsIDRequest:
    path_params: GetNotificationsIDPathParams = field()
    

@dataclass
class GetNotificationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    notification_entity: Optional[shared.NotificationEntity] = field(default=None)
    
