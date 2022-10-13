from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayoutInstrument:
    account_last_four_digits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountLastFourDigits' }})
    instrument_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instrumentType' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    
