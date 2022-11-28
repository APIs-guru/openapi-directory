from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class AdexchangebuyerCreativesListDealsStatusFilterEnum(str, Enum):
    APPROVED = "approved"
    CONDITIONALLY_APPROVED = "conditionally_approved"
    DISAPPROVED = "disapproved"
    NOT_CHECKED = "not_checked"

class AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum(str, Enum):
    APPROVED = "approved"
    CONDITIONALLY_APPROVED = "conditionally_approved"
    DISAPPROVED = "disapproved"
    NOT_CHECKED = "not_checked"


@dataclass
class AdexchangebuyerCreativesListQueryParams:
    account_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    buyer_creative_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'buyerCreativeId', 'style': 'form', 'explode': True }})
    deals_status_filter: Optional[AdexchangebuyerCreativesListDealsStatusFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'dealsStatusFilter', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    open_auction_status_filter: Optional[AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'openAuctionStatusFilter', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdexchangebuyerCreativesListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerCreativesListRequest:
    query_params: AdexchangebuyerCreativesListQueryParams = field()
    security: AdexchangebuyerCreativesListSecurity = field()
    

@dataclass
class AdexchangebuyerCreativesListResponse:
    content_type: str = field()
    status_code: int = field()
    creatives_list: Optional[shared.CreativesList] = field(default=None)
    
