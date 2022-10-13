from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ApigeeOrganizationsSitesApicategoriesGetPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApigeeOrganizationsSitesApicategoriesGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    envgroup_hostname: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'envgroupHostname', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    realtime: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'realtime', 'style': 'form', 'explode': True }})
    select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sortby: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortby', 'style': 'form', 'explode': True }})
    time_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timeRange', 'style': 'form', 'explode': True }})
    time_unit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timeUnit', 'style': 'form', 'explode': True }})
    topk: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'topk', 'style': 'form', 'explode': True }})
    ts_ascending: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'tsAscending', 'style': 'form', 'explode': True }})
    tzo: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tzo', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ApigeeOrganizationsSitesApicategoriesGetSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ApigeeOrganizationsSitesApicategoriesGetRequest:
    path_params: ApigeeOrganizationsSitesApicategoriesGetPathParams = field(default=None)
    query_params: ApigeeOrganizationsSitesApicategoriesGetQueryParams = field(default=None)
    security: ApigeeOrganizationsSitesApicategoriesGetSecurity = field(default=None)
    

@dataclass
class ApigeeOrganizationsSitesApicategoriesGetResponse:
    content_type: str = field(default=None)
    google_cloud_apigee_v1_api_category: Optional[shared.GoogleCloudApigeeV1APICategory] = field(default=None)
    status_code: int = field(default=None)
    
