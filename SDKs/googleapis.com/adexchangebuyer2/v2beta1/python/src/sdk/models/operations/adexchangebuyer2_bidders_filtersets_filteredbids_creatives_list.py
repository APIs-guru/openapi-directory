from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams:
    creative_status_id: int = field(default=None, metadata={'path_param': { 'field_name': 'creativeStatusId', 'style': 'simple', 'explode': False }})
    filter_set_name: str = field(default=None, metadata={'path_param': { 'field_name': 'filterSetName', 'style': 'simple', 'explode': False }})
    

@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListQueryParams:
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
class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest:
    path_params: Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams = field(default=None)
    query_params: Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListQueryParams = field(default=None)
    security: Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity = field(default=None)
    

@dataclass
class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse:
    content_type: str = field(default=None)
    list_creative_status_breakdown_by_creative_response: Optional[shared.ListCreativeStatusBreakdownByCreativeResponse] = field(default=None)
    status_code: int = field(default=None)
    
