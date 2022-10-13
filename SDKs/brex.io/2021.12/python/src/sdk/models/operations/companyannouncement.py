from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyAnnouncementPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyAnnouncementSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyAnnouncementRequest:
    path_params: CompanyAnnouncementPathParams = field(default=None)
    security: CompanyAnnouncementSecurity = field(default=None)
    

@dataclass
class CompanyAnnouncementResponse:
    company_announcement_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_announcement_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
