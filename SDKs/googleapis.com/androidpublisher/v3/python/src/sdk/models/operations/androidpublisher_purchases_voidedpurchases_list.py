from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AndroidpublisherPurchasesVoidedpurchasesListPathParams:
    package_name: str = field(metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherPurchasesVoidedpurchasesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherPurchasesVoidedpurchasesListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherPurchasesVoidedpurchasesListRequest:
    path_params: AndroidpublisherPurchasesVoidedpurchasesListPathParams = field()
    query_params: AndroidpublisherPurchasesVoidedpurchasesListQueryParams = field()
    security: AndroidpublisherPurchasesVoidedpurchasesListSecurity = field()
    

@dataclass
class AndroidpublisherPurchasesVoidedpurchasesListResponse:
    content_type: str = field()
    status_code: int = field()
    voided_purchases_list_response: Optional[shared.VoidedPurchasesListResponse] = field(default=None)
    
