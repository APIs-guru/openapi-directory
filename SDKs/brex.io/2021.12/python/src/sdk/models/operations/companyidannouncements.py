from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyIDAnnouncementsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyIDAnnouncementsQueryParams:
    data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'data', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanyIDAnnouncementsSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyIDAnnouncementsRequest:
    path_params: CompanyIDAnnouncementsPathParams = field()
    query_params: CompanyIDAnnouncementsQueryParams = field()
    security: CompanyIDAnnouncementsSecurity = field()
    

@dataclass
class CompanyIDAnnouncementsResponse:
    content_type: str = field()
    status_code: int = field()
    company_id_announcements_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_id_announcements_default_application_json_any: Optional[Any] = field(default=None)
    
