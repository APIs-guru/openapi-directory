from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchNotificationsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchNotificationsIDRequestBody:
    notify_on_copy: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'notify_on_copy' }})
    notify_user_actions: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'notify_user_actions' }})
    recursive: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'recursive' }})
    send_interval: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'send_interval' }})
    

@dataclass
class PatchNotificationsIDRequest:
    path_params: PatchNotificationsIDPathParams = field()
    request: Optional[PatchNotificationsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchNotificationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    notification_entity: Optional[shared.NotificationEntity] = field(default=None)
    
