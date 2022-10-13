from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvAssignMsisdnRequest:
    ee_product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eeProductId' }})
    msisdn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msisdn' }})
    profile_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileToken' }})
    tracking_header: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingHeader' }})
    
