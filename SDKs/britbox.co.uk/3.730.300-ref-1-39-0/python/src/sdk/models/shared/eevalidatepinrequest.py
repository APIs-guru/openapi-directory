from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EeValidatePinRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    pin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pin' }})
    pin_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinReference' }})
    tracking_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingHeader' }})
    
