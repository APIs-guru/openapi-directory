from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    interval_end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.endTime', 'style': 'form', 'explode': True }})
    interval_start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval.startTime', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest:
    path_params: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams = field(default=None)
    query_params: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams = field(default=None)
    security: AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity = field(default=None)
    

@dataclass
class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse:
    content_type: str = field(default=None)
    google_cloud_assuredworkloads_v1beta1_list_violations_response: Optional[shared.GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse] = field(default=None)
    status_code: int = field(default=None)
    
