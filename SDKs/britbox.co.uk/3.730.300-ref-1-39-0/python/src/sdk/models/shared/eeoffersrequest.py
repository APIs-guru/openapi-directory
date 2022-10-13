from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EeOffersRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    msisdn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msisdn' }})
    tracking_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingHeader' }})
    
