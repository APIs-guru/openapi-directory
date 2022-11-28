from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyAnnouncementPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyAnnouncementSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyAnnouncementRequest:
    path_params: CompanyAnnouncementPathParams = field()
    security: CompanyAnnouncementSecurity = field()
    

@dataclass
class CompanyAnnouncementResponse:
    content_type: str = field()
    status_code: int = field()
    company_announcement_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_announcement_default_application_json_any: Optional[Any] = field(default=None)
    
