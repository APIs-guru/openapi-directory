from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import peeredvpc


@dataclass_json
@dataclass
class Egress:
    peered_vpc: Optional[peeredvpc.PeeredVpc] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeredVpc' }})
    
