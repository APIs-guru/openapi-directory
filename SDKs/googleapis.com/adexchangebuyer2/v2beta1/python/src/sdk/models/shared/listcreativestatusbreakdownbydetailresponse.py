from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filteredbiddetailrow

class ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum(str, Enum):
    DETAIL_TYPE_UNSPECIFIED = "DETAIL_TYPE_UNSPECIFIED"
    CREATIVE_ATTRIBUTE = "CREATIVE_ATTRIBUTE"
    VENDOR = "VENDOR"
    SENSITIVE_CATEGORY = "SENSITIVE_CATEGORY"
    PRODUCT_CATEGORY = "PRODUCT_CATEGORY"
    DISAPPROVAL_REASON = "DISAPPROVAL_REASON"
    POLICY_TOPIC = "POLICY_TOPIC"
    ATP_VENDOR = "ATP_VENDOR"
    VENDOR_DOMAIN = "VENDOR_DOMAIN"
    GVL_ID = "GVL_ID"


@dataclass_json
@dataclass
class ListCreativeStatusBreakdownByDetailResponse:
    detail_type: Optional[ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailType' }})
    filtered_bid_detail_rows: Optional[List[filteredbiddetailrow.FilteredBidDetailRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteredBidDetailRows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
