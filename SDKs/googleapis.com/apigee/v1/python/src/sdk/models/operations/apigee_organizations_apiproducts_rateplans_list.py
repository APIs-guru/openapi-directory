from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ApigeeOrganizationsApiproductsRateplansListPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class ApigeeOrganizationsApiproductsRateplansListStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"


@dataclass
class ApigeeOrganizationsApiproductsRateplansListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    expand: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startKey', 'style': 'form', 'explode': True }})
    state: Optional[ApigeeOrganizationsApiproductsRateplansListStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ApigeeOrganizationsApiproductsRateplansListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ApigeeOrganizationsApiproductsRateplansListRequest:
    path_params: ApigeeOrganizationsApiproductsRateplansListPathParams = field(default=None)
    query_params: ApigeeOrganizationsApiproductsRateplansListQueryParams = field(default=None)
    security: ApigeeOrganizationsApiproductsRateplansListSecurity = field(default=None)
    

@dataclass
class ApigeeOrganizationsApiproductsRateplansListResponse:
    content_type: str = field(default=None)
    google_cloud_apigee_v1_list_rate_plans_response: Optional[shared.GoogleCloudApigeeV1ListRatePlansResponse] = field(default=None)
    status_code: int = field(default=None)
    
