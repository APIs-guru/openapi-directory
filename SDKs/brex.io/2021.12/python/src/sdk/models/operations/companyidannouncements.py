from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyIDAnnouncementsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyIDAnnouncementsQueryParams:
    data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'data', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanyIDAnnouncementsSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyIDAnnouncementsRequest:
    path_params: CompanyIDAnnouncementsPathParams = field(default=None)
    query_params: CompanyIDAnnouncementsQueryParams = field(default=None)
    security: CompanyIDAnnouncementsSecurity = field(default=None)
    

@dataclass
class CompanyIDAnnouncementsResponse:
    company_id_announcements_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_id_announcements_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
