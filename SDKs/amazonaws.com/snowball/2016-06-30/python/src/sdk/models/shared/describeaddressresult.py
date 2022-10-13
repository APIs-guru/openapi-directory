from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class DescribeAddressResult:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    
