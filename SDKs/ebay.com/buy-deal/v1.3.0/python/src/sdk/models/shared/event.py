from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import coupon
from . import image
from . import terms


@dataclass_json
@dataclass
class Event:
    applicable_coupons: Optional[List[coupon.Coupon]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicableCoupons' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    event_affiliate_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventAffiliateWebUrl' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    event_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventWebUrl' }})
    images: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    terms: Optional[terms.Terms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
