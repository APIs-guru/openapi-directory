from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import priceperbuyer

class GuaranteedFixedPriceTermsReservationTypeEnum(str, Enum):
    RESERVATION_TYPE_UNSPECIFIED = "RESERVATION_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    SPONSORSHIP = "SPONSORSHIP"


@dataclass_json
@dataclass
class GuaranteedFixedPriceTerms:
    fixed_prices: Optional[List[priceperbuyer.PricePerBuyer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedPrices' }})
    guaranteed_impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedImpressions' }})
    guaranteed_looks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedLooks' }})
    impression_cap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionCap' }})
    minimum_daily_looks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumDailyLooks' }})
    percent_share_of_voice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentShareOfVoice' }})
    reservation_type: Optional[GuaranteedFixedPriceTermsReservationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservationType' }})
    
