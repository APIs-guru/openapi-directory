from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersMeNotificationsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    unread: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'unread', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeNotificationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeNotificationsRequest:
    query_params: GetUsersMeNotificationsQueryParams = field(default=None)
    security: GetUsersMeNotificationsSecurity = field(default=None)
    

@dataclass
class GetUsersMeNotificationsResponse:
    content_type: str = field(default=None)
    notification_list_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
