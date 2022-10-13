from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvVoucherRequest:
    voucher: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucher' }})
    
