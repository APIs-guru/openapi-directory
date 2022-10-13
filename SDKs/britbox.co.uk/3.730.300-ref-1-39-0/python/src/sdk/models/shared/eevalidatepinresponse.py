from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EeValidatePinResponse:
    pin_valid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinValid' }})
    tracking_header: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingHeader' }})
    
