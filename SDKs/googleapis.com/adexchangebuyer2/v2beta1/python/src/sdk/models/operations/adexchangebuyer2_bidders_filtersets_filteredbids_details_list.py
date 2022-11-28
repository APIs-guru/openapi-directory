from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams:
    creative_status_id: int = field(metadata={'path_param': { 'field_name': 'creativeStatusId', 'style': 'simple', 'explode': False }})
    filter_set_name: str = field(metadata={'path_param': { 'field_name': 'filterSetName', 'style': 'simple', 'explode': False }})
    

@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest:
    path_params: Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams = field()
    query_params: Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListQueryParams = field()
    security: Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity = field()
    

@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_creative_status_breakdown_by_detail_response: Optional[shared.ListCreativeStatusBreakdownByDetailResponse] = field(default=None)
    
