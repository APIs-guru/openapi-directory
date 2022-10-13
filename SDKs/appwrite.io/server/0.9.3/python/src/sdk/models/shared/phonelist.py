from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import phone


@dataclass_json
@dataclass
class PhoneList:
    phones: List[phone.Phone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phones' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
