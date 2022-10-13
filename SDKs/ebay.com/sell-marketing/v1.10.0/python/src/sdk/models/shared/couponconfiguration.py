from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CouponConfiguration:
    coupon_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'couponCode' }})
    coupon_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'couponType' }})
    max_coupon_redemption_per_user: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCouponRedemptionPerUser' }})
    
