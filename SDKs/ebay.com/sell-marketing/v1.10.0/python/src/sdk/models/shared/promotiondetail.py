from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PromotionDetail:
    coupon_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'couponCode' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    promotion_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionHref' }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionId' }})
    promotion_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionImageUrl' }})
    promotion_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionStatus' }})
    promotion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionType' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
