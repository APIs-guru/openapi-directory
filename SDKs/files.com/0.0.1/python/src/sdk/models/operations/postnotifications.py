from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostNotificationsRequestBody:
    group_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    notify_on_copy: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'notify_on_copy' }})
    notify_user_actions: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'notify_user_actions' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    recursive: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'recursive' }})
    send_interval: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'send_interval' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclass
class PostNotificationsRequest:
    request: Optional[PostNotificationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostNotificationsResponse:
    content_type: str = field()
    status_code: int = field()
    notification_entity: Optional[shared.NotificationEntity] = field(default=None)
    
