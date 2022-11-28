from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ApigeeOrganizationsHostQueriesListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApigeeOrganizationsHostQueriesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    dataset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dataset', 'style': 'form', 'explode': True }})
    envgroup_hostname: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'envgroupHostname', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    incl_queries_without_report: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inclQueriesWithoutReport', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    submitted_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'submittedBy', 'style': 'form', 'explode': True }})
    to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ApigeeOrganizationsHostQueriesListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ApigeeOrganizationsHostQueriesListRequest:
    path_params: ApigeeOrganizationsHostQueriesListPathParams = field()
    query_params: ApigeeOrganizationsHostQueriesListQueryParams = field()
    security: ApigeeOrganizationsHostQueriesListSecurity = field()
    

@dataclass
class ApigeeOrganizationsHostQueriesListResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_apigee_v1_list_async_queries_response: Optional[shared.GoogleCloudApigeeV1ListAsyncQueriesResponse] = field(default=None)
    
