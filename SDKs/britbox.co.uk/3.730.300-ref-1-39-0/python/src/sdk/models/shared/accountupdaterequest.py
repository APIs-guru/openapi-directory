from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class AccountUpdateRequest:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    default_payment_instrument_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultPaymentInstrumentId' }})
    default_payment_method_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultPaymentMethodId' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    min_rating_playback_guard: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minRatingPlaybackGuard' }})
    segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    tracking_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingEnabled' }})
    
