from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Transactions:
    cashier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cashier' }})
    time_stamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeStamp' }})
    txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    txtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txtype' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
