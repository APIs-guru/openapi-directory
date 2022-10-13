from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreativeCorrections:
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class CreativeDisapprovalReasons:
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class CreativeFilteringReasonsReasons:
    filtering_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteringCount' }})
    filtering_status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteringStatus' }})
    

@dataclass_json
@dataclass
class CreativeFilteringReasons:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    reasons: Optional[List[CreativeFilteringReasonsReasons]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasons' }})
    

@dataclass_json
@dataclass
class Creative:
    html_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HTMLSnippet' }})
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserName' }})
    agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agencyId' }})
    api_upload_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiUploadTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    attribute: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    buyer_creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerCreativeId' }})
    click_through_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrl' }})
    corrections: Optional[List[CreativeCorrections]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corrections' }})
    disapproval_reasons: Optional[List[CreativeDisapprovalReasons]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disapprovalReasons' }})
    filtering_reasons: Optional[CreativeFilteringReasons] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteringReasons' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    impression_tracking_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionTrackingUrl' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    product_categories: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCategories' }})
    restricted_categories: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedCategories' }})
    sensitive_categories: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensitiveCategories' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    vendor_type: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendorType' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoURL' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
