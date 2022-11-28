from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ApigeeOrganizationsDevelopersBalanceAdjustPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApigeeOrganizationsDevelopersBalanceAdjustQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ApigeeOrganizationsDevelopersBalanceAdjustSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ApigeeOrganizationsDevelopersBalanceAdjustRequest:
    path_params: ApigeeOrganizationsDevelopersBalanceAdjustPathParams = field()
    query_params: ApigeeOrganizationsDevelopersBalanceAdjustQueryParams = field()
    security: ApigeeOrganizationsDevelopersBalanceAdjustSecurity = field()
    request: Optional[shared.GoogleCloudApigeeV1AdjustDeveloperBalanceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ApigeeOrganizationsDevelopersBalanceAdjustResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_apigee_v1_developer_balance: Optional[shared.GoogleCloudApigeeV1DeveloperBalance] = field(default=None)
    
