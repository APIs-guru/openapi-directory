from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyNotificationListSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyNotificationListRequest:
    security: CompanyNotificationListSecurity = field()
    

@dataclass
class CompanyNotificationListResponse:
    content_type: str = field()
    status_code: int = field()
    company_notification_list_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_notification_list_default_application_json_any: Optional[Any] = field(default=None)
    
