from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class DescribeAddressesResult:
    addresses: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Addresses' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
