from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DealershipData:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    dealer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealerName' }})
    ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    zip_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipCode' }})
    
