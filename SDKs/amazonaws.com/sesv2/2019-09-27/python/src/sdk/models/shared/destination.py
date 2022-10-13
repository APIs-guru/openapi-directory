from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Destination:
    bcc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BccAddresses' }})
    cc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CcAddresses' }})
    to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToAddresses' }})
    
