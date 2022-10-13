from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyNotificationListSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyNotificationListRequest:
    security: CompanyNotificationListSecurity = field(default=None)
    

@dataclass
class CompanyNotificationListResponse:
    company_notification_list_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_notification_list_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
