from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictAdminsQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    show_links: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'show_links', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDistrictAdminsRequest:
    query_params: GetDistrictAdminsQueryParams = field(default=None)
    

@dataclass
class GetDistrictAdminsResponse:
    content_type: str = field(default=None)
    district_admins_response: Optional[shared.DistrictAdminsResponse] = field(default=None)
    status_code: int = field(default=None)
    
