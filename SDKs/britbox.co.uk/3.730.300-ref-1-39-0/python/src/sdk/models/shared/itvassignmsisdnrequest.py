from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvAssignMsisdnRequest:
    ee_product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eeProductId') }})
    msisdn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msisdn') }})
    profile_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileToken') }})
    tracking_header: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingHeader') }})
    
