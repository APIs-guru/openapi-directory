from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import price

class ProgrammaticGuaranteedTermsReservationTypeEnum(str, Enum):
    RESERVATION_TYPE_UNSPECIFIED = "RESERVATION_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    SPONSORSHIP = "SPONSORSHIP"


@dataclass_json
@dataclass
class ProgrammaticGuaranteedTerms:
    fixed_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedPrice' }})
    guaranteed_looks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedLooks' }})
    impression_cap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionCap' }})
    minimum_daily_looks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumDailyLooks' }})
    percent_share_of_voice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentShareOfVoice' }})
    reservation_type: Optional[ProgrammaticGuaranteedTermsReservationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservationType' }})
    
